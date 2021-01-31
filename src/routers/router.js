import Index from "../view/admin/dashboard/Index";
import Edit from "../view/admin/products/Edit";
import List from "../view/admin/products/List";
import Login from "../view/loginAndRegister/login"
import Register from "../view/loginAndRegister/register";
import PageNotFound from "../view/PageNotFound";
import {AreaChartOutlined,ShopOutlined} from '@ant-design/icons'
export const mainRoutes = [
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/404",
        component: PageNotFound
    }
];

export const adminRoutes = [
    {
        path: "/admin/dashboard",
        component: Index,
        isShow: true,
        title: "看板",
        icon: AreaChartOutlined
    },
    {
        path: "/admin/products",
        component: List,
        exact: true,
        isShow: true,
        title: "商品管理",
        icon: ShopOutlined
    },
    {
        path: "/admin/products/edit/:id?",
        component: Edit,
        isShow: false
    }
];