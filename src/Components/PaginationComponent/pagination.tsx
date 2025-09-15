import { collection, CollectionReference, DocumentData, Firestore, getDoc, getDocs, limit, orderBy, query, QueryDocumentSnapshot, startAfter } from "firebase/firestore";
import React, { useEffect, useState } from "react";

interface PaginationProps {
  db: Firestore; // твой db
  collectionName: string; // название коллекции (например "pets")
  orderByField: string; // поле для сортировки (например "createdAt")
  pageSize?: number; // сколько элементов грузить за раз
  renderItem: (item: DocumentData & {id: string}) => JSX.Element; // как отрисовать каждый элемент
}


const PaginationComponent: React.FC<PaginationProps> = ({ db, collectionName, orderByField, pageSize = 6, renderItem }) => {
 const [items, setItems] = useState<(DocumentData & { id: string })[]>([]);
 const [currentPage, setCurrentPage] = useState(1);
 const [pageCursors, setPageCursors] = useState<
   (QueryDocumentSnapshot<DocumentData> | null)[]
 >([null]);
 const [loading, setLoading] = useState(false);
 const [hasMore, setHasMore] = useState(true);

 const loadPage = async (page: number) => {
   if (page < 1) return;
   setLoading(true);

   // Явно типизируем коллекцию как DocumentData
   const ref = collection(
     db,
     collectionName
   ) as CollectionReference<DocumentData>; 

   let q;
   if (page === 1) {
     q = query(ref, orderBy(orderByField, "desc"), limit(pageSize));
   } else {
     const prevCursor = pageCursors[page - 1];
     if (!prevCursor) {
       setLoading(false);
       return;
     }
     q = query(
       ref,
       orderBy(orderByField, "desc"),
       startAfter(prevCursor),
       limit(pageSize)
     );
   }

   const snapshot = await getDocs(q);

   // lastVisible будет типа QueryDocumentSnapshot<DocumentData> | undefined
   const lastVisible = snapshot.docs[snapshot.docs.length - 1] ?? null;

   // Приведение doc.data() к DocumentData - безопасно, т.к. коллекция типизирована
  setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

   // Сохраняем курсор для страницы
   setPageCursors((prev) => {
     const copy = [...prev];
     copy[page] = lastVisible as QueryDocumentSnapshot<DocumentData> | null;
     return copy;
   });

   setHasMore(snapshot.size === pageSize);
   setCurrentPage(page);
   setLoading(false);
 };

 useEffect(() => {
   loadPage(1);
   // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [collectionName, orderByField]);


    return (
      <div>
        {items.map((item) => renderItem(item))}

        <div className="pagination">
          <button onClick={() => loadPage(1)} disabled={currentPage === 1}>
            ««
          </button>
          <button
            onClick={() => loadPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            «
          </button>

          <span className={currentPage === 1 ? "active" : ""}>1</span>
          {currentPage >= 2 && (
            <span className={currentPage === 2 ? "active" : ""}>2</span>
          )}
          {currentPage >= 3 && (
            <span className={currentPage === 3 ? "active" : ""}>3</span>
          )}
          {hasMore && <span>…</span>}

          <button onClick={() => loadPage(currentPage + 1)} disabled={!hasMore}>
            »
          </button>
          <button onClick={() => loadPage(currentPage + 1)} disabled={!hasMore}>
            »»
          </button>
        </div>
      </div>
    );
}

export default PaginationComponent