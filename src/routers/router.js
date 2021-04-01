import Login from "../view/loginAndRegister/login"
import Register from "../view/loginAndRegister/register";
import PageNotFound from "../view/PageNotFound";
import { AreaChartOutlined, DownloadOutlined, SolutionOutlined, SafetyCertificateOutlined, AuditOutlined, VerifiedOutlined, ToolOutlined, CopyOutlined, CloudUploadOutlined, ShareAltOutlined, SearchOutlined, GlobalOutlined, CreditCardOutlined } from '@ant-design/icons'
import UserDashboard from "../view/admin/user/UserDashboard";
import dataUpload from "../view/admin/user/dataUpload";
import creditGrant from "../view/admin/user/creditGrant";
import certificateDownload from "../view/admin/user/certificateDownload";
import bingli from "../view/admin/user/bingli";
import SuperviseDashboard from "../view/admin/supervise/SuperviseDashboard";
import InstitutionDashboard from "../view/admin/institution/InstitutionDashboard";
import dataShare from "../view/admin/institution/dataShare";
import modelSearch from "../view/admin/institution/modelSearch";
import learning from "../view/admin/institution/learning";
import certificateApprove from "../view/admin/supervise/certificateApprove";
import dataApproval from "../view/admin/supervise/dataApproval";
import punish from "../view/admin/supervise/punish";
import contributionVerify from "../view/admin/supervise/contributionVerify";
import creditAuth from "../view/admin/institution/creditAuth";
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

export const userRoutes = [
    {
        path: "/admin/userdashboard",
        component: UserDashboard,
        isShow: true,
        title: "个人信息",
        icon: AreaChartOutlined
    },
    {
        path: "/admin/dataUpload",
        component: dataUpload,
        isShow: true,
        title: "信息录入",
        icon: CloudUploadOutlined
    },
    {
        path: "/admin/creditgrant",
        component: creditGrant,
        isShow: true,
        title: "信用数据授权",
        icon: AuditOutlined
    },
    {
        path: "/admin/certificateDownload",
        component: certificateDownload,
        isShow: true,
        title: "证书下载",
        icon: DownloadOutlined
    },
    {
        path: "/admin/bingli",
        component: bingli,
        isShow: true,
        title: "病例",
        icon: DownloadOutlined
    }
];

export const superviseRoutes = [
    {
        path: "/admin/supervisedashboard",
        component: SuperviseDashboard,
        exact: true,
        isShow: true,
        title: "监管信息面板",
        icon: AreaChartOutlined
    },
    {
        path: "/admin/dataapproval",
        component: dataApproval,
        exact: true,
        isShow: true,
        title: "信息审核",
        icon: CopyOutlined
    },
    {
        path: "/admin/punish",
        component: punish,
        exact: true,
        isShow: true,
        title: "违约处罚",
        icon: ToolOutlined
    },
    {
        path: "/admin/ceriticateApprove",
        component: certificateApprove,
        exact: true,
        isShow: true,
        title: "认证签名",
        icon: VerifiedOutlined
    },
    {
        path: "/admin/contributionverify",
        component: contributionVerify,
        exact: true,
        isShow: true,
        title: "贡献审核",
        icon: SolutionOutlined
    },
];

export const institutionRoutes = [

    {
        path: "/admin/institutiondashboard",
        component: InstitutionDashboard,
        isShow: true,
        title: "综合看板",
        icon: AreaChartOutlined
    },
    {
        path: "/admin/datashare",
        component: dataShare,
        isShow: true,
        title: "数据共享",
        icon: ShareAltOutlined
    },
    {
        path: "/admin/modelsearch",
        component: modelSearch,
        isShow: true,
        title: "模型搜索",
        icon: SearchOutlined
    },
    {
        path: "/admin/learning",
        component: learning,
        isShow: true,
        title: "联邦学习",
        icon: GlobalOutlined
    },
    {
        path: "/admin/creditAuth",
        component: creditAuth,
        isShow: true,
        title: "信用认证",
        icon: SafetyCertificateOutlined
    },
];