import { createContext, useState } from "react";

import axios from "axios";

const StatementContext = createContext();

export function StatementContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [statement, setstatement] = useState({});
  const [detailData, setDetailData] = useState({
    staId: "",
    staBalance: statement.staBalance,
    staName: statement.staName,
    staDate: statement.staDate,
  });

  async function getAllstatement() {
    const allstatement = await axios.get(
      `https://localhost:44393/api/FmsGetAllStatements`
    );

    setData(allstatement.data);
  }

  async function getStatementById(id) {
    const statementObject = await axios.get(
      `https://localhost:44393/api/FmsGetStatementById/${id}`
    );

    setDetailData(statementObject.data);
    setstatement(statementObject.data);
  }

  async function deleteStatement(id) {
    const deletedStatement = await axios.delete(
      `https://localhost:44393/api/FmsDeleteStatement?id=${id}`
    );
  }

  const handleDelete = (id) => {
    deleteStatement(id);

    getAllstatement();
  };

  async function updateStatement(id, updatedData) {
    const updatedStatement = await axios.put(
      `https://localhost:44393/api/FmsUpdateStatement/${id}`,
      updatedData
    );
  }

  const handleupdate = (id, updatedData) => {
    updateStatement(id, updatedData);

    getAllstatement();
  };

  const valuetoshare = {
    data,
    detailData,
    statement,
    getAllstatement,
    handleDelete,
    handleupdate,
    getStatementById,
  };
  return (
    <StatementContext.Provider value={valuetoshare}>
      {children}
    </StatementContext.Provider>
  );
}

export default StatementContext;
