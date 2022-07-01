import React, {useState } from "react";
import { IconSpinner } from "../utils/icons";
import Pagination from "../Components/Pagination";
import TableHeader from "../Components/TableHeader";
import TableRows from "../Components/TableRows";
import { userList } from "../utils/UsersList";
import '../styles/Table.scss'

function Table() {
  const [countPerPage, setCountPerPage] = useState(50);
  const [totalRecord, setTotalRecord] = useState(0);
  const [page, setPage] = useState(0);
  const [dataList, setDataList] = useState([]);

  useState(() => {
    setDataList(userList);
    setTotalRecord(userList.length);
  }, [page, countPerPage]);

  return (
    <>
      <div className="TableContainer">
        {totalRecord > 0 ? (
          <>
            <div className="table_responsive">
              <table>
                <TableHeader />
                <tbody>
                  {dataList
                    .slice(
                      page * countPerPage,
                      page * countPerPage + countPerPage
                    )
                    .map((user) => (
                      <TableRows user={user} key={user.id} />
                    ))}
                </tbody>
              </table>
            </div>
            <Pagination
              countPerPage={countPerPage}
              setCountPerPage={setCountPerPage}
              totalRecord={totalRecord}
              page={page}
              setPage={setPage}
            />
          </>
        ) : (
          <div className="Loader">
            <IconSpinner />
          </div>
        )}
      </div>
    </>
  );
}

export default Table;
