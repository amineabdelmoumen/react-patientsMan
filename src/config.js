export const TODO_LIST_ABI = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "Patients",
    outputs: [
      {
        name: "id",
        type: "uint256",
      },
      {
        name: "patientName",
        type: "string",
      },
      {
        name: "patientEmail",
        type: "string",
      },
      {
        name: "patientDiagnostic",
        type: "string",
      },
      {
        name: "completed",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xa1982835",
  },
  {
    constant: true,
    inputs: [],
    name: "patientsCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xb6b1289d",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        name: "patientName",
        type: "string",
      },
      {
        indexed: false,
        name: "patientEmail",
        type: "string",
      },
      {
        indexed: false,
        name: "patientDiagnostic",
        type: "string",
      },
      {
        indexed: false,
        name: "completed",
        type: "bool",
      },
    ],
    name: "PatientsAdded",
    type: "event",
    signature:
      "0x94d07ce7bcdc7229602c5836d292bbb501173a5d7f3ecab1089d6ad676c6efa6",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        name: "completed",
        type: "bool",
      },
    ],
    name: "PatientCompleted",
    type: "event",
    signature:
      "0x493bffeb0c491490891a2685799983de6327ceafcca4cfa80ac3bafa8c9b726e",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
    ],
    name: "PatientDeleted",
    type: "event",
    signature:
      "0x411e6cb7f8076d33b96af4eacb36fb6242cf37a51744cf7461dd82288219ec60",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_patientName",
        type: "string",
      },
      {
        name: "_patientEmail",
        type: "string",
      },
      {
        name: "_patientDiagnostic",
        type: "string",
      },
    ],
    name: "addPatient",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x0c380fc9",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "toggleCompleted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x455f5024",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "deletePatient",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x67e57482",
  },
];
export const TODO_LIST_ADDRESS = "0xAA21F9c5C975B9318F8494D4ceA828E807d16279";
