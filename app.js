// تهيئة Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// تسجيل الدخول
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // تم تسجيل الدخول بنجاح
            const user = userCredential.user;
            alert(`مرحبًا ${user.email}`);
            // توجيه المستخدم إلى صفحة التدريب
            window.location.href = 'training.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`خطأ في تسجيل الدخول: ${errorMessage}`);
        });
});

// التسجيل
const signupLink = document.getElementById('signup-link');
signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    const email = prompt("أدخل بريدك الإلكتروني:");
    const password = prompt("أدخل كلمة المرور:");

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // تم التسجيل بنجاح
            const user = userCredential.user;
            alert(`تم إنشاء حساب جديد لـ ${user.email}`);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`خطأ في التسجيل: ${errorMessage}`);
        });
});