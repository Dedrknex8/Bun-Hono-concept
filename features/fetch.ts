import type {Server} from 'bun'

interface User { 
    id : number,
    name : string
}


interface ApiResponse {
    message : string,
    method : string,
    route : string,
    data? : User | User[]
}
const users: User[] = [
{
    id:1,
    name:"John",

},
{
    id : 2,
    name: "Dummy"
}
];


const server : Server = Bun.serve({
    port:3000,
    fetch(req : Request) : Response  {
        const url = new URL(req.url)
        const method = req.method

        let response : ApiResponse = {
            message : "Hello from Bun",
            method : method,
            route : url.pathname,
        }

        if(url.pathname === '/'){
            if(method === 'GET'){
                response.message = "This is homepage"
            }else{
                response.message = "Method not allowd for this route"
            }
        }else if (url.pathname === '/users'){
            switch (method) {
                case 'GET' :
                    response.message = "Fteching users data ..",
                    response.data = users

                    break;
                case 'POST' :
                    response.message = "Crating new USers"

                    break;
                default  :
                    response.message = 'Method not Allowed'
                    break;
            }
        }
        return Response.json(response);
    }
})
console.log(`Bun server is running on http://localhost:${3000}`);
