import { createContext, useState } from "react";

import axios from "axios";

const TemplateContext = createContext();

export function TemplateContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState([]);

  async function getAlltemplate() {
    const alltemplate = await axios.get(
      `https://localhost:44393/api/FmsGetAllTemplates`
    );

    setData(alltemplate.data);
  }

  async function getTemplateById(id) {
    const templateObject = await axios.get(
      `https://localhost:44393/api/FmsGetTemplateById/${id}`
    );

    setDetailData(templateObject.data);
  }

  async function deleteTemplate(id) {
    const deletedTemplate = await axios.delete(
      `https://localhost:44393/api/FmsDeleteTemplate?id=${id}`
    );
  }

  const handleDelete = (id) => {
    deleteTemplate(id);

    getAlltemplate();
  };

  async function updateTemplate(id, updatedData) {
    const updatedTemplate = await axios.put(
      `https://localhost:44393/api/FmsUpdateTemplate/${id}`,
      updatedData
    );
  }

  const handleupdate = (id, updatedData) => {
    updateTemplate(id, updatedData);

    getAlltemplate();
  };

  const valuetoshare = {
    data,
    detailData,
    getAlltemplate,
    handleDelete,
    handleupdate,
    getTemplateById,
  };
  return (
    <TemplateContext.Provider value={valuetoshare}>
      {children}
    </TemplateContext.Provider>
  );
}

export default TemplateContext;
