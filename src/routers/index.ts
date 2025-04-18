import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import { checkAuth } from "../services/authServices";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
        },
        {
            path: "/register",
            name: "Register",
            component: Register,
        },
    ]
})

router.beforeEach(async (to, _, next) => {
    
    const hasPermission = await checkAuth();
    if (to.name === "Home" && !hasPermission) {
        next({ name: "Login" });
        return;
    }
    if (to.name === "Login" && hasPermission) {
        next({ name: "Home" });
        return;
    }
    next();
    return;
});

export default router;