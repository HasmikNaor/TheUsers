interface IconData {
  data: string;
  viewBox: string;
}
interface IconDictionary {
  [key: string]: IconData;
}

export const iconDictionary: IconDictionary = {
  warning: {
    data: `M34.653,30.47L18.727,2.884c-0.269-0.464-0.764-0.75-1.299-0.75c-0.537,0-1.031,0.286-1.3,0.75L0.202,30.47
		c-0.269,0.464-0.269,1.036,0,1.5s0.763,0.75,1.299,0.75h31.853c0.535,0,1.031-0.286,1.3-0.75
		C34.921,31.506,34.921,30.934,34.653,30.47z M4.099,29.72L17.427,6.634L30.756,29.72H4.099z M15.427,11.677h4V23.51h-4V11.677z
		 M15.427,25.507h4v2.919h-4V25.507z`,
    viewBox: "0 0 34.854 34.855",
  },
  plus: {
    data: "M22 9.77778H12.2222V0H9.77778V9.77778H0V12.2222H9.77778V22H12.2222V12.2222H22V9.77778Z",
    viewBox: "0 0 22 22",
  },

  download: {
    data: `M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012v-8.861H25.462z
    M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723
    c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742
    c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193
    C15.092,18.979,14.62,18.426,14.62,18.426z`,
    viewBox: "0 0 29.978 29.978",
  },
  updating: {
    data: "M350.7 120.42c-29.58-20.86-64.36-32.14-99.43-32.96-34.67-.81-69.65 8.56-100.2 28.95-11.31 7.55-21.54 15.95-30.63 25-30.42 30.27-47.96 67.96-51.91 106.86-3.96 39.02 5.63 79.48 29.46 115.16 7.05 10.55 15.38 20.75 25 30.43 21.53 21.64 47.81 36.92 76.33 44.74 28.1 7.7 58.66 8.23 89.33.52 11.02-2.77 21.54-6.24 31.36-10.4 9.27-3.93 18.58-8.81 27.77-14.65 15.8-10.02 36.75-5.33 46.78 10.47 10.03 15.8 5.34 36.76-10.47 46.78-11.64 7.4-24.35 13.96-37.84 19.68-13.64 5.78-27.43 10.4-41.17 13.85-41.98 10.55-84.26 9.72-123.52-1.04-40.01-10.98-76.68-32.24-106.54-62.25-12.68-12.74-23.76-26.32-33.22-40.5C8.93 351.82-4.28 295.81 1.21 241.65c5.5-54.29 29.68-106.57 71.52-148.22 12.07-12.01 25.66-23.16 40.71-33.21 42.55-28.41 91.13-41.46 139.16-40.34 44.75 1.04 89.06 14.36 127.61 38.97l-3.9-14.78c-4.93-18.76 6.28-37.98 25.03-42.91 18.76-4.93 37.98 6.28 42.91 25.03l24.38 92.5c5.95 18.4-4.07 38.19-22.46 44.24l-95.85 31.72c-18.45 6.08-38.34-3.96-44.42-22.41-6.07-18.45 3.96-38.34 22.42-44.41l22.38-7.41zM468.81 376.2c-7.97 16.9-28.15 24.14-45.06 16.17-16.9-7.97-24.14-28.15-16.16-45.06 2.02-4.29 3.73-8.29 5.1-11.98 1.43-3.85 2.75-7.96 3.96-12.31a154.65 154.65 0 0 0 4.28-20.71c.98-7.19 1.49-14.33 1.49-21.31 0-18.66 15.13-33.79 33.79-33.79 18.66 0 33.79 15.13 33.79 33.79-.01 10.43-.69 20.57-2.02 30.33a222.07 222.07 0 0 1-6.12 29.72c-1.63 5.86-3.58 11.82-5.83 17.87-2.32 6.23-4.73 12-7.22 17.28z",
    viewBox: "0 0 490 512.34",
  },
  edit: {
    data: "M19.539,246.006c-1.412-1.413-2.995-2.159-4.576-2.159c-2.361,0-4.33,1.676-5.266,4.482l-9.24,27.723c-0.701,2.103-0.591,3.95,0.309,5.201c0.736,1.021,1.959,1.584,3.443,1.584c0.79,0,1.655-0.155,2.571-0.461l27.722-9.241c2.36-0.786,3.907-2.267,4.355-4.167c0.448-1.9-0.273-3.916-2.032-5.675L19.539,246.006zM280.205,48.279L234.553,2.627C232.86,0.934,230.599,0,228.189,0c-2.41,0-4.67,0.934-6.363,2.627L51.892,172.561c-3.212,3.212-6.993,9.33-8.429,13.638l-7.417,22.252c-1.503,4.508,0.008,10.909,3.368,14.27l20.697,20.697c2.403,2.403,6.48,3.957,10.388,3.957c0,0,0,0,0.001,0c1.404,0,2.71-0.198,3.881-0.589l22.253-7.417c4.309-1.436,10.426-5.217,13.637-8.428L280.205,61.007C283.714,57.498,283.714,51.788,280.205,48.279zM252.535,70.896L166.8,156.631c-2.929,2.929-6.768,4.393-10.607,4.393s-7.678-1.465-10.606-4.393c-5.858-5.857-5.858-15.355,0-21.213l85.735-85.735c5.857-5.857,15.355-5.857,21.213,0C258.393,55.54,258.393,65.038,252.535,70.896z",
    viewBox: "0 0 282.837 282.837",
  },
  trash: {
    data: `M399.179,67.285l-74.794,0.033L324.356,0L166.214,0.066l0.029,67.318l-74.802,0.033l0.025,62.914h307.739L399.179,67.285z
           M198.28,32.11l94.03-0.041l0.017,35.262l-94.03,0.041L198.28,32.11z
           M91.465,490.646h307.739V146.359H91.465V490.646z
           M317.461,193.372h16.028v250.259h-16.028V193.372L317.461,193.372z
           M237.321,193.372h16.028v250.259h-16.028V193.372L237.321,193.372z
           M157.18,193.372h16.028v250.259H157.18V193.372z`,
    viewBox: "0 0 485 485",
  },
};
