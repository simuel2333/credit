import { sha256 } from 'js-sha256';


export const randomHash = () => {
    return '0x' + sha256(String(Math.random()))
}

export const mockTime = (time) => {
    let timestamp = Date.parse(new Date()) - time;
    return timetrans(timestamp)
}

export const timetrans = (timestap) => {
    var date = new Date(timestap);//如果date为13位不需要乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D + h + m + s;
}

export const JGInfo = [
    { addr: "0x097E180c3A7FFd8218BE11D2464f98b3713B1ED3", name: "金融机构A", "授权": 2, "联邦学习": 1, "异常": 0 },
    { addr: "0x1eE48513e8b0fadcc523804d732d4A6E500D35F7", name: "金融机构B", "授权": 3, "联邦学习": 0, "异常": 0 },
    { addr: "0xFF96130267Ec9d9311b569B17756d4634504cF56", name: "金融机构C", "授权": 1, "联邦学习": 2, "异常": 0 },
    { addr: "0x873B21085EF5e227809cE04E7db548eb4fB8d8Ae", name: "金融机构D", "授权": 3, "联邦学习": 0, "异常": 1 },
    { addr: "0x9fE6651e8da4cb636b698C5fcdb4005306541437", name: "金融机构E", "授权": 1, "联邦学习": 0, "异常": 0 },
    { addr: "0x097E180c3A7FFd8218BE11D2464f98b3713B1ED3", name: "金融机构F", "授权": 2, "联邦学习": 0, "异常": 0 },
    { addr: "0xbE6aEF0f828EF96dAb65c8E0b3AD24a56f223aD0", name: "金融机构G", "授权": 4, "联邦学习": 1, "异常": 1 },

]
export const alarms = [
    {
        "hash": "0x885f5e8857abef2b2d85bfef9eca627ac31dbf9faf21b618a39539cb64971a3f",
        "addr": "0x097E180c3A7FFd8218BE11D2464f98b3713B1ED3",
        "name": "金融机构F",
        "time": "2021-03-31 14:29:04",
        "tags": [
            "索要授权"
        ],
        "key": 0
    },
    {
        "hash": "0xff746bee4dc474b38b1af4dc8f2d6c2b21af75118fab1257c70a2e4ea1d246c2",
        "addr": "0x097E180c3A7FFd8218BE11D2464f98b3713B1ED3",
        "name": "金融机构A",
        "time": "2021-03-31 13:36:24",
        "tags": [
            "索要授权"
        ],
        "key": 1
    },
    {
        "hash": "0x22edd257ccfc223c31ef6d9fa3bd12fa1cd9613ceb4b4b17451da17984651a4e",
        "addr": "0x873B21085EF5e227809cE04E7db548eb4fB8d8Ae",
        "name": "金融机构D",
        "time": "2021-03-31 13:34:22",
        "tags": [
            "异常"
        ],
        "key": 2
    },
    {
        "hash": "0xf7746701c483a87c11f52ebb1c09cbef4f6a428dfb71382f1941b3e3d4a7ddbe",
        "addr": "0xbE6aEF0f828EF96dAb65c8E0b3AD24a56f223aD0",
        "name": "金融机构G",
        "time": "2021-03-31 13:18:01",
        "tags": [
            "索要授权"
        ],
        "key": 3
    },
    {
        "hash": "0xf418303aa1bac53a7ff02ffe54b595ecb980586f3bfa934ac01a858ab71d8360",
        "addr": "0x097E180c3A7FFd8218BE11D2464f98b3713B1ED3",
        "name": "金融机构A",
        "time": "2021-03-31 09:48:44",
        "tags": [
            "索要授权"
        ],
        "key": 4
    },
    {
        "hash": "0xeb807407ee092db69b25405e219b0a34a75ac742cd1d4a4e45a387d8f3e69ae0",
        "addr": "0xbE6aEF0f828EF96dAb65c8E0b3AD24a56f223aD0",
        "name": "金融机构G",
        "time": "2021-03-31 05:55:06",
        "tags": [
            "索要授权"
        ],
        "key": 5
    },
    {
        "hash": "0x00ec2c157a4225ccc7f3faace6cc5e88579c74fbfc13c81ead47e9f5817a7650",
        "addr": "0xFF96130267Ec9d9311b569B17756d4634504cF56",
        "name": "金融机构C",
        "time": "2021-03-31 04:25:41",
        "tags": [
            "索要授权"
        ],
        "key": 6
    },
    {
        "hash": "0x481700cea4f21c434f412e429425abaaf9b595a5284f684fdfbaa0a0ca217975",
        "addr": "0x097E180c3A7FFd8218BE11D2464f98b3713B1ED3",
        "name": "金融机构F",
        "time": "2021-03-31 03:11:34",
        "tags": [
            "索要授权"
        ],
        "key": 7
    },
    {
        "hash": "0x281184a4a80d06b5636e9f60b56358767b8fe2c8670eb8f88d7b91ef177a765b",
        "addr": "0xbE6aEF0f828EF96dAb65c8E0b3AD24a56f223aD0",
        "name": "金融机构G",
        "time": "2021-03-31 03:10:22",
        "tags": [
            "联邦学习"
        ],
        "key": 8
    },
    {
        "hash": "0x2619223111c0ccde4899508c74da0cb02991ca6b14fb4cf3b6c82db867f361a5",
        "addr": "0xbE6aEF0f828EF96dAb65c8E0b3AD24a56f223aD0",
        "name": "金融机构G",
        "time": "2021-03-31 02:41:17",
        "tags": [
            "异常"
        ],
        "key": 9
    },
    {
        "hash": "0xf6ec16e50e69aa9f0bb6aed14e39019cbc7378c35ef671b6d2641433d1862a7e",
        "addr": "0xFF96130267Ec9d9311b569B17756d4634504cF56",
        "name": "金融机构C",
        "time": "2021-03-30 22:17:27",
        "tags": [
            "联邦学习"
        ],
        "key": 10
    },
    {
        "hash": "0x705d276cc0e01b920ff9e004395298fd79b8704414c33a578c9b023702c144a2",
        "addr": "0xFF96130267Ec9d9311b569B17756d4634504cF56",
        "name": "金融机构C",
        "time": "2021-03-30 21:42:06",
        "tags": [
            "联邦学习"
        ],
        "key": 11
    },
    {
        "hash": "0x945e28c796f023df6c529dc2c719fdaa9b0945cf38835e7d58aef7d09af1b97b",
        "addr": "0x1eE48513e8b0fadcc523804d732d4A6E500D35F7",
        "name": "金融机构B",
        "time": "2021-03-30 21:18:34",
        "tags": [
            "索要授权"
        ],
        "key": 12
    },
    {
        "hash": "0x35e37056ab90be62cdcb20a9d83ec5fb8f8750d0c819185b023aa4b3b82b5bae",
        "addr": "0x9fE6651e8da4cb636b698C5fcdb4005306541437",
        "name": "金融机构E",
        "time": "2021-03-30 20:13:54",
        "tags": [
            "索要授权"
        ],
        "key": 13
    },
    {
        "hash": "0x453042045a62fea22957959ffc2750c590b8b8444ec1c131e71b738926840efa",
        "addr": "0x097E180c3A7FFd8218BE11D2464f98b3713B1ED3",
        "name": "金融机构A",
        "time": "2021-03-30 19:15:16",
        "tags": [
            "联邦学习"
        ],
        "key": 14
    },
    {
        "hash": "0xac55e9870cf3762e45c78d0d2ec951d83a1ac8e1939ca66560466fda083d08ae",
        "addr": "0x873B21085EF5e227809cE04E7db548eb4fB8d8Ae",
        "name": "金融机构D",
        "time": "2021-03-30 16:55:19",
        "tags": [
            "索要授权"
        ],
        "key": 15
    },
    {
        "hash": "0x464b94754a700b3932ef49d64e22b0933d104b2d2ea265544daa963d5029f8ed",
        "addr": "0xbE6aEF0f828EF96dAb65c8E0b3AD24a56f223aD0",
        "name": "金融机构G",
        "time": "2021-03-30 10:31:34",
        "tags": [
            "索要授权"
        ],
        "key": 16
    },
    {
        "hash": "0xb503803a4e3280841c5b8e46e3d3bfc1512b3ffed54b48fecce8ebd1af6bf830",
        "addr": "0x873B21085EF5e227809cE04E7db548eb4fB8d8Ae",
        "name": "金融机构D",
        "time": "2021-03-30 03:51:35",
        "tags": [
            "索要授权"
        ],
        "key": 17
    },
    {
        "hash": "0x43473c2f3f05d3f389e7dfdfb7eb9e973d0f33e13d749147eabab62b06aacf42",
        "addr": "0x1eE48513e8b0fadcc523804d732d4A6E500D35F7",
        "name": "金融机构B",
        "time": "2021-03-29 21:56:55",
        "tags": [
            "索要授权"
        ],
        "key": 18
    },
    {
        "hash": "0xd2f71df343a565ca1e8a90de91d06e47743923fe2a4ebc7627fa97eb41eca6e8",
        "addr": "0x1eE48513e8b0fadcc523804d732d4A6E500D35F7",
        "name": "金融机构B",
        "time": "2021-03-29 13:00:21",
        "tags": [
            "索要授权"
        ],
        "key": 19
    },
    {
        "hash": "0xaa9f5c692b9cc43ba679a8631ceacd3d7b8e9058874e8b22012702b241365cf7",
        "addr": "0xbE6aEF0f828EF96dAb65c8E0b3AD24a56f223aD0",
        "name": "金融机构G",
        "time": "2021-03-29 12:13:38",
        "tags": [
            "索要授权"
        ],
        "key": 20
    },
    {
        "hash": "0x51f70a70aa4f1db8092f9e13ba979a32791b3539c0be35154640443d04ce1421",
        "addr": "0x873B21085EF5e227809cE04E7db548eb4fB8d8Ae",
        "name": "金融机构D",
        "time": "2021-03-29 09:31:29",
        "tags": [
            "索要授权"
        ],
        "key": 21
    }
]
//根据JGInfo生成交易告警信息
export const mockAlarm = () => {
    let alarms = []
    let time = 0;
    for (let i = 0; i < JGInfo.length; i++) {
        
        //授权
        for (let j = 0; j < JGInfo[i]["授权"]; j++) {
            let rowData = {}
            rowData.hash = randomHash()
            rowData.addr = JGInfo[i].addr;
            rowData.name = JGInfo[i].name;
            rowData.time = time = time + Math.ceil(Math.random() * 1000 * 60 * 60 * 24);
            rowData.tags = ["索要授权"]
            alarms.push(rowData)
        }
        //联邦学习
        time = 0
        for (let j = 0; j < JGInfo[i]["联邦学习"]; j++) {
            let rowData = {}
            rowData.hash = randomHash()
            rowData.addr = JGInfo[i].addr;
            rowData.name = JGInfo[i].name;
            rowData.time = time = time + Math.ceil(Math.random() * 1000 * 60 * 60 * 24);
            rowData.tags = ["联邦学习"]
            alarms.push(rowData)
        }
        //异常
        time = 0
        for (let j = 0; j < JGInfo[i]["异常"]; j++) {
            let rowData = {}
            rowData.hash = randomHash()
            rowData.addr = JGInfo[i].addr;
            rowData.name = JGInfo[i].name;
            rowData.time = time = time + Math.ceil(Math.random() * 1000 * 60 * 60 * 24);
            rowData.tags = ["异常"]
            alarms.push(rowData)
        }

    }
    //按时间倒序排列
    alarms.sort((a, b) => {
        return a.time - b.time;
    })
    for (let i = 0; i < alarms.length; i++) {
        alarms[i].key = i;
        alarms[i].time = mockTime(alarms[i].time);
    }
    return alarms;
}

export const UserInfo = [
    { addr: "0x44Ae50C1828Da9d95aAC4D596bb41404e7127908", name: "Alice" },
    { addr: "0xC1F311bD7a621e0CC0FDd4B6660D4e9a40982854", name: "Bob" },
    { addr: "0x10a12eB389B0Df756C63778E522C3463B7B60BD0", name: "Chris" },
    { addr: "0x8a0Bc5Db7E852d0A3184A03AEA525Ef91FbEB5fE", name: "David" },
]

export const oppAlarm = [
    "索要授权",
    "异常",
    "联邦学习",
]