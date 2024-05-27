const btn = document.getElementById('btn');
const liffId = 'https://liff.line.me/2005429724-YDvWGPdv';
let userId = 'U639765ef45ab34b564f6a95e9683d0be';

function main(){
    // 1.liff init
    // 2.get profile
    liff.init({liffId: liffId});
    liff.ready.then(() => {
        if(!liff.isLoggedIn()){
            liff.login();
        }        
        liff.getProfile().then((profile) => {            
            userId = profile.userId;
            console.log(profile);
        });
    });    
}

main()

async function send(e){     
    e.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;    
    // 3. axios post data
    try {
        const result = await axios.post('http://localhost:3000/api/v1/change-richmenu', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            userId: userId
        });        
        if(result.status == 200){
            console.log("closeWindow");
            // liff.closeWindow();
        }
    } catch (error) {
        console.log(error);
    }        
};

let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.set('view engine','ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port,() => {
    console.log(`sever is running on  port ${port}`)
})
