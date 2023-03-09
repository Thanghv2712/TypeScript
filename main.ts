export {}

    // let username: string ;

    // username = "thangdeptrai";
    // username =  '123';
    // console.log(username)

    const myNumber:number = 123 //kiểu số
    const isAdmin:boolean = true //kiểu true , false
    
    const arrNumber:number[] = [1,2,3 ] //kiểu mảng chứa số
    const arrString:string[] = ["ông thắng" , "ông trung"] // kiểu mảng chứa chuỗi


    function sum(a:number , b:number):number{
        const result = a + b ;
        console.log(result)
    return result;
    }
    sum(10 , 20)


    const project:{id:number , name:string , image : string , link:string , status:boolean} = {
        id: 1,
        name: "ong thang",
        image: "abc",
        link: "đây là link",
        status: true
    }


    const projetcList = (props:{id:number , name:string , image : string , link:string , status:boolean}):{id:number , name:string , image : string , link:string , status:boolean} =>{
            return props;

    }

    projetcList(project)



    const ListProjects : { id:number , name:string }[] = [
        {
            id : 1 ,
            name : "ông thắng"
        },
        {
            id : 2 ,
            name : "ông Trung"
        }


    ]
    for(let ob of ListProjects){
        console.log("ob id nè" , ob.id) , 
        console.log("ob name nè" , ob.name) 
    }
