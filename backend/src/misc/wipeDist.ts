import path from 'path'
import del from 'del'

let distPath = path.join(__dirname,"../../dist")

console.log(distPath);

(async() => {
    try{
        await del(distPath)
        console.log('Dist directory was deleted')
    }catch(err){
        console.error('Error while deleting dist directory')
    }
})();
