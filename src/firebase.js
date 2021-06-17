// Cấu hình firebase kết nối và tạo function CRUD
import firebase from "firebase/app";
import "firebase/firestore";

import { ref, onUnmounted } from 'vue';

// Cấu hình lấy từ projrect trên firebase
const config = {
    apiKey: "AIzaSyC6Ke4KN1DF_1YgH7Rw4kMOUizDTwsH8-o",
    authDomain: "crud-vue-a5487.firebaseapp.com",
    projectId: "crud-vue-a5487",
    storageBucket: "crud-vue-a5487.appspot.com",
    messagingSenderId: "494784519080",
    appId: "1:494784519080:web:aee8c9b84ea669efda5b9d",
    measurementId: "G-SGYMDFHX4T"
}
// Khởi tạo phiên bản FirebaseApp mặc định
const firebaseApp = firebase.initializeApp(config);
//Tham chiếu đến bảng users
const db = firebase.firestore();
const usersCollection = db.collection('users');
// CRUD
export const createUser = user => {
    return usersCollection.add(user);
};
export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null;
};
export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
};
export const deleteUser = id => {
    return usersCollection.doc(id).delete();
};
export const userLoaderUsers = () => {
    // ref() Trả về đối tượng users có thể thay đổi
    const users = ref([]);
    const updateUser = usersCollection.onSnapshot(snapshot => {
        // Khi dữ liệu cậu nhật đối tượng user được cập nhật qua thuộc tính value
        users.value = snapshot.docs.map(doc => {
            return ({ id: doc.id, ...doc.data() })
        });
    })
    // Cập nhật đối tượng user sẽ được chạy sau khi render component
    onUnmounted(updateUser);
    return users;
}