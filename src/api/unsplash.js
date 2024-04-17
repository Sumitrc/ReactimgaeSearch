import  axios  from "axios";


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:
     'Client-ID UAa2T0lbBbVYManWRNoDOeWafkDFnmhBM17ULD623tg'
       }

});