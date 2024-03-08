type Std1 = {
    name: string,
    rollNo: number,
}

type Std2 = {
    name: string,
    rollNo: number,
}

type Std3 = {
    name: string,
    rollNo: number,
}

type Std4 = {
    name: string,
    rollNo: number,
}

type Std5 = {
    name: string,
    rollNo: number,
}


interface class1 {
     
       std1: Std1,
       std2: Std2,
       std3: Std3,
       std4: Std4,
       std5: Std5,
}

interface class2 {
     
    std1: Std1,
    std2: Std2,
    std3: Std3,
    std4: Std4,
    std5: Std5,
}

interface class3 {
     
    std1: Std1,
    std2: Std2,
    std3: Std3,
    std4: Std4,
    std5: Std5,
}

interface class4 {
     
    std1: Std1,
    std2: Std2,
    std3: Std3,
    std4: Std4,
    std5: Std5,
}

interface class5 {
     
    std1: Std1,
    std2: Std2,
    std3: Std3,
    std4: Std4,
    std5: Std5,
}

interface schoolData{
    schoolNme: string,
    class1: class1,
    class2: class2,
    class3: class3,
    class4: class4,
    class5: class5,
}


let schoolInfo:  schoolData = {
    schoolNme: "            Army Public School & College            ",

    class1: {
      std1: {
         name: "Aizal",
         rollNo: 20421
      },
      std2: {
        name: "Haram",
        rollNo: 34689
      },
      std3: {
        name: "M.Abdullah",
        rollNo: 4587
     },
     std4: {
       name: "Javeria",
       rollNo: 10486
     },
     std5: {
        name: "Minah",
        rollNo: 45677
     }

    },

      class2: {
        std1: {
           name: "Bisma",
           rollNo: 67850
        },
        std2: {
          name: "Naeem",
          rollNo: 34689
        },
        std3: {
          name: "Anaya",
          rollNo: 27858
       },
       std4: {
         name: "Aryan",
         rollNo: 24500
       },
       std5: {
          name: "Minsa",
          rollNo: 67823
       }
      },

      class3: {
        std1: {
           name: "Abd-ul-Rafy",
           rollNo: 78533
        },
        std2: {
          name: "M.Ali",
          rollNo: 34647
        },
        std3: {
          name: "Obaid",
          rollNo: 20634
       },
       std4: {
         name: "Usama",
         rollNo: 46937
       },
       std5: {
          name: "Shehnam",
          rollNo: 20231
       }
      },

      class4: {
        std1: {
           name: "Dur-e-Adan",
           rollNo: 23374
        },
        std2: {
          name: "Amina",
          rollNo: 34689
        },
        std3: {
          name: "Noor",
          rollNo: 20421
       },
       std4: {
         name: "Mehrosh",
         rollNo: 34689
       },
       std5: {
          name: "Hira",
          rollNo: 20421
       }
      },

      class5: {
        std1: {
           name: "Maryam",
           rollNo: 20421
        },
        std2: {
          name: "Hareem",
          rollNo: 34689
        },
        std3: {
          name: "Bakht",
          rollNo: 20421
       },
       std4: {
         name: "Farasat",
         rollNo: 34689
       },
       std5: {
          name: "Ibrahim",
          rollNo: 20421
       }
      },
}
   
console.log(schoolInfo);