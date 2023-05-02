export const userInputs = [
  /*{
    
    // "taxWithholding": 0,
    // "hoursWorked": 0,
    // "dateOfJoining": "2023-02-26T20:21:07.716Z",
   
    
   
   
  },*/
    {
      id: 1,
      label: "employeeFullName",
      name: "employeeFullName",
      type: "text",
      placeholder: "john_doe",
    },
    {
      id: 2,
      label: "attendenceTime",
      name: "attendenceTime",
      type: "datetime-local",
      placeholder: "2023-02-26T20:21:07.716Z",
    },
    {
      id: 3,
      label: "holidays",
      name: "holidays",
      type: "datetime-local",
      placeholder: "2023-02-26T20:21:07.716Z",
    },
    {
      id: 4,
      label: "employeeSalary",
      name: "employeeSalary",
      type: "number",
      placeholder: "0",
    },
    
  ];

export const categoryInputs = [
  /*{
  "categoryName": "string",
  "categoryDescription": "string"
}*/
    {
      id: 1,
      label: "categoryName",
      name: "categoryName",
      type: "text",
      placeholder: "Blackacre",
    },
    {
      id: 2,
      label: "categoryDescription",
      name: "categoryDescription",
      type: "text",
      placeholder: "",
    },
   
    
  ];
  
export const rawmatrialInputs = [
  /*{
  "materialName": "string",
  "materialDescription": "string"
}*/
    {
      id: 1,
      label: "materialName",
      name: "materialName",
      type: "text",
      placeholder: "Blackacre",
    },
    {
      id: 2,
      label: "materialDescription",
      name: "materialDescription",
      type: "text",
      placeholder: "",
    },
    
    
  ];
  
export const rawmatrialinventoryInputs = [
  /*{
  "materialId": 0,
  "quantity": 0,
  "shippingDate": "2023-03-04T10:38:43.568Z",
  "monthlyCosts": 0,
  "area": "string",
  "reorderingPoint": 0
}*/
    {
      id: 1,
      label: "materialId",
      name: "materialId",
      type: "number",
      placeholder: "Blackacre",
    },
    {
      id: 2,
      label: "quantity",
      name: "quantity",
      type: "text",
      placeholder: "",
    },
    {
      id: 3,
      label: "shippingDate",
      name: "shippingDate",
      type: "datetime-local",
      placeholder: "2023-03-04T10:38:43.568Z",
    },
    {
      id: 4,
      label: "monthlyCosts",
      name: "monthlyCosts",
      type: "number",
      placeholder: "",
    },
    {
      id: 5,
      label: "area",
      name: "area",
      type: "text",
      placeholder: "",
    },
    {
      id: 6,
      label: "reorderingPoint",
      name: "reorderingPoint",
      type: "number",
      placeholder: "",
    },
    {
      id: 7,
      label: "hasReachedROP",
      name: "hasReachedROP",
      type: "text",
      placeholder: "",
    },
    
    
  ];
  
  export const productInputs = [
    /*{
  "productName": "string",
  "productDescription": "string",
  "purchasePrice": 0,
  "salesPrice": 0,
  "categoryId": 1
}*/
      {
        id: 1,
        label: "productName",
        name: "productName",
        type: "text",
        placeholder: "Blackacre",
      },
      {
        id: 2,
        label: "productDescription",
        name: "productDescription",
        type: "text",
        placeholder: "",
      },
      {
        id: 3,
        label: "purchasePrice",
        name: "purchasePrice",
        type: "number",
        placeholder: "",
      },
      {
        id: 4,
        label: "salesPrice",
        name: "salesPrice",
        type: "number",
        placeholder: "0",
      },
      {
        id: 5,
        label: "categoryId",
        name: "categoryId",
        type: "number",
        placeholder: "0",
      },
      
    ];
    
  export const productinventoryInputs = [
    /*{
  "productId": 0,
  "quantity": 0,
  "shippingDate": "2023-02-28T20:43:57.493Z",
  "monthlyCosts": 0,
  "area": "string",
  "reorderingPoint": 0
}*/
      {
        id: 1,
        label: "productId",
        name: "productId",
        type: "number",
        placeholder: "",
      },
      {
        id: 2,
        label: "quantity",
        name: "quantity",
        type: "number",
        placeholder: "",
      },
      {
        id: 3,
        label: "shippingDate",
        name: "shippingDate",
        type: "datetime-local",
        placeholder: "2023-02-28T20:43:57.493Z",
      },
      {
        id: 4,
        label: "monthlyCosts",
        name: "monthlyCosts",
        type: "number",
        placeholder: "0",
      },
      {
        id: 5,
        label: "area",
        name: "area",
        type: "text",
        placeholder: "",
      },
      {
        id: 6,
        label: "reorderingPoint",
        name: "reorderingPoint",
        type: "number",
        placeholder: "",
      },
      
    ];
    
  export const manufacturInputs = [
    /*{
  "productManufacturedId": 0,
  "qtyToManufacture": 0,
  "manufacturingCost": 0,
  "startingDate": "2023-03-23T21:48:02.867Z",
  "rawMaterialsUsed": [
    {
      "materialId": 0,
      "qty": 0
    }
  ]

}*/
      
      {
        id: 2,
        label: "qtyToManufacture",
        name: "qtyToManufacture",
        type: "number",
        placeholder: "",
      },
      {
        id: 3,
        label: "manufacturingCost",
        name: "manufacturingCost",
        type: "number",
        placeholder: "",
      },
      {
        id: 4,
        label: "startingDate",
        name: "startingDate",
        type: "datetime-local",
        placeholder: "2023-03-23T21:48:02.867Z",
      }
      
    ];
    
  export const supplierorderInputs = [
    /*{
  "shippingCost": 0,
}*/
      
      {
        id: 2,
        label: "shippingCost",
        name: "shippingCost",
        type: "number",
        placeholder: ""
      },
      
    ];
  export const supplierInputs = [
    /*{
    "materialId": 0,
    "pricePerUnit": 0
  }*/
      
      {
        id: 1,
        label: "supplierName",
        name: "supplierName",
        type: "text",
        placeholder: "",
      },
      {
        id: 2,
        label: "supplierDescription",
        name: "supplierDescription",
        type: "text",
        placeholder: "",
      },
      {
        id: 3,
        label: "adverageDeliveryTimeInDays",
        name: "adverageDeliveryTimeInDays",
        type: "number",
        placeholder: "",
      }
      ,
      {
        id: 4,
        label: "phoneNumber",
        name: "phoneNumber",
        type: "text",
        placeholder: "",
      }
      ,
      {
        id: 5,
        label: "email",
        name: "email",
        type: "email",
        placeholder: "",
      }
      ,
      {
        id: 6,
        label: "address",
        name: "address",
        type: "text",
        placeholder: "",
      }
      
    ];
 
    export const supplierMaterialInputs = [
      /*{
      "materialId": 0,
      "pricePerUnit": 0
    }*/
        
        {
          id: 1,
          label: "materialId",
          name: "materialId",
          type: "number",
          placeholder: "",
        },
        {
          id: 2,
          label: "pricePerUnit",
          name: "pricePerUnit",
          type: "text",
          placeholder: "",
        },
        
        
      ];
