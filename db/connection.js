const mongoose = require('mongoose');


const url = `mongodb+srv://chat_app_admin:admin123456@cluster0.1diubt2.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e) => console.log('Error', e))