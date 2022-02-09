

const PRODUCTS = [
    {
        category : 'Men Formal Shirt',
        id: 1,
        brand : 'DENNISON',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11530474/2020/3/2/20f7e2ea-7097-4f60-8af0-89928de666641583151745381-DENNISON-Men-Blue-Comfort-Regular-Fit-Solid-Formal-Shirt-346-1.jpg',
        price:{
            mrp: 2499,
            discount : '68% OFF',
            discountedPrice : 799
        }
    },
    
    {
        category:'Men Slim Fit Formal Shirt',
        id:2,
        brand:'English Navy',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/14/11adb5a6-9666-4bd2-8ed8-03fd20291f9d1581635929903-1.jpg',
        price :{
            mrp: 999,
            discount: '40% OFF',
            discountedPrice:499
        }
    },
    {
        category:'Slim Fit Formal Shirt',
        id:3,
        brand:'IVOC',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10906886/2019/11/23/a562e167-4996-4f76-b194-fa52a1f0e25e1574505900989-IVOC-Mens-Solid-Shirt-9151574505899261-1.jpg',
        price :{
            mrp: 1399,
            discount: '59% OFF',
            discountedPrice:573
        }
    },
    {
        category:'Men Formal Shirt',
        id:4,
        brand:'JAINISH',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/1/17/d71045b2-4300-4395-b110-f652fa00e9e51579211471795-1.jpg',
        price :{
            mrp: 1299,
            discount: '61% OFF',
            discountedPrice: 506
        }
    },
    {
        category:'Slim Fit Formal Shirt',
        id:5,
        brand:'Hancock',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1830428/2017/3/30/11490857788324-Hancock-Men-Shirts-3661490857788137-1.jpg',
        price :{
            mrp: 1899,
            discount: '50% OFF',
            discountedPrice: 949
        }
    },
    {
        category:'Men Blue Opaque Formal Shirt',
        id:6,
        brand:'Nautica',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15353398/2021/10/13/849f7196-c54a-4b5d-aeea-f06c35d2c4ba1634116600300-Nautica-Men-Shirts-7321634116599779-1.jpg',
        price :{
            mrp: 2739,
            discount: '45% OFF',
            discountedPrice: 1539
        }
    },
    {
        category:'Regular Fit Formal Shirt',
        id:7,
        brand:'DENNISON',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11530478/2020/3/5/c0b58085-b281-47be-86dc-29e550c2f9b21583403674219-Dennison-Mens-Black-Solid-Regular-Fit-Formal-Shirt-145158340-1.jpg',
        price :{
            mrp: 2499,
            discount: '68% OFF',
            discountedPrice: 799
        }
    },
    {
        category:'Opaque Cotton Formal Shirt',
        id:8,
        brand:'Louis Philippe',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15192546/2021/9/16/2aeb103f-e2f6-4355-af9f-fa6b559d73aa1631779447099-Louis-Philippe-Men-Shirts-9951631779446406-1.jpg',
        price :{
            mrp: 2199,
            discount: '41% OFF',
            discountedPrice: 1297
        }
    },
    {
        category:'Men Slim Formal Formal Shirt',
        id:9,
        brand:'English Navy',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7234486/2018/8/28/d2f4d136-f486-4e2f-8021-b0361e6d53361535440159810-na-681535440159582-1.jpg',
        price :{
            mrp: 999,
            discount: '45% OFF',
            discountedPrice: 549
        }
    },
    {
        category:'Slim Fit Solid Formal Shirt',
        id:10,
        brand:'Louis Philippe',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16518820/2021/12/29/5caa790e-f26a-40e0-9b11-d01f13fd56a91640780739622-Louis-Philippe-Men-Shirts-1081640780739126-1.jpg',
        price :{
            mrp: 1999,
            discount: '40% OFF',
            discountedPrice: 1199
        }
    },
    {
        category:'Men Printed Slim Fit Formal Shirt',
        id:11,
        brand:'INVICTUS',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1086729/2016/4/7/11460025193210-INVICTUS-Pink-Printed-Slim-Formal-Shirt-2171460025190216-1.jpg',
        price :{
            mrp: 1799,
            discount: '50% OFF',
            discountedPrice: 899
        }
    },
    {
        category:'Men Slim Fit Formal Shirt',
        id:12,
        brand:'Hancock',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/5394086/2018/4/20/11524224859040-Hancock-Men-Black-Slim-Fit-Solid-Formal-Shirt-3071524224858865-1.jpg',
        price :{
            mrp: 1999,
            discount: '50% OFF',
            discountedPrice: 999
        }
    },
    {
        category:'Slim Fit Formal Shirt',
        id:13,
        brand:'United Colors Of Benetton',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12957154/2020/11/26/75051a2c-de8a-4c93-aa17-51080abfce871606366170483-United-Colors-of-Benetton-Men-Shirts-5671606366168934-1.jpg',
        price :{
            mrp: 2499,
            discount: '35% OFF',
            discountedPrice: 1624
        }
    },
    {
        category:'Men Slim Fit Formal Shirt',
        id:14,
        brand:'INVICTUS',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10887538/2020/2/27/10ca2ba1-d7d5-4b30-ab36-34feac6dad331582784284620-INVICTUS-Men-Green-Slim-Fit-Solid-Formal-Shirt-8861582784283-6.jpg',
        price :{
            mrp: 1299,
            discount: '45% OFF',
            discountedPrice: 714
        }
    },
    {
        category:'Slim Fit Formal Shirt',
        id:15,
        brand:'Louis Philippe',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16326826/2021/12/16/509095f1-7631-4a6b-94df-904a5923adc91639638438227-Louis-Philippe-Men-Shirts-6961639638437815-1.jpg',
        price :{
            mrp: 2299,
            discount: '40% OFF',
            discountedPrice: 1379
        }
    },
    {
        category:'Men Slim Fit Formal Shirt',
        id:16,
        brand:'Hancock',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7277178/2018/9/5/52d3d154-c4ac-449e-8556-7216b496f1e41536128627106-na-9581536128626898-1.jpg',
        price :{
            mrp: 1499,
            discount: '50% OFF',
            discountedPrice: 749
        }
    },
    {
        category:'Easy Care Men Formal Shirt',
        id:17,
        brand:'INVICTUS',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13340250/2021/5/3/66f18272-474c-470a-94bc-30c755496cd81620043509065INVICTUSMenWhiteSlimFitSolidPureCottonFormalShirt2.jpg',
        price :{
            mrp: 999,
            discount: '50% OFF',
            discountedPrice: 499
        }
    },{
        category:'Modern Slim Fit Formal Shirt',
        id:18,
        brand:'Allen Solly',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16574952/2022/1/7/d335d62e-fb79-43d0-a3c5-e4b93cd3d60a1641558135719-Allen-Solly-Men-Shirts-2811641558135151-1.jpg',
        price :{
            mrp: 1499,
            discount: '20% OFF',
            discountedPrice: 1199
        }
    },
    {
        category:'Formal Shirt',
        id:19,
        brand:'CODE By Lifestyle',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16412214/2021/12/8/51b7aeab-b487-4924-aef4-080f7e28ed111638959252222CODEbyLifestyleMenPinkCasualShirt1.jpg',
        price :{
            mrp: "",
            discount: '',
            discountedPrice: 1499
        }
    },
    {
        category:'Opaque Formal Shirt',
        id:20,
        brand:'GANT',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15159564/2021/8/16/57c0f89a-99dc-498c-b9cb-80633dfc5a2d1629132447963Shirts1.jpg',
        brand:'United Colors Of Benetton',
        price :{
            mrp: 5499,
            discount: '40% OFF',
            discountedPrice: 3299
        }
    },
    {
        category:'Self Design Slim  Formal Shirt',
        id:21,
        brand:'INVICTUS',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10887578/2020/7/22/62c4f105-3ded-4447-9990-410aabd4d0331595418499556-INVICTUS-Men-Navy-Blue--Red-Slim-Fit-Self-Design-Formal-Shir-5.jpg',
        price :{
            mrp: 1699,
            discount: '35% OFF',
            discountedPrice: 1104
        }
    },
    {
        category:'Smart Slim Fit Formal Shirt',
        id:22,
        brand:'Dennison',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12349088/2020/9/29/e59582c1-f8a1-4088-ae47-6a2f1f714dc71601348665605-DENNISON-Men-Teal-Green-Smart-Slim-Fit-Solid-Formal-Shirt-70-1.jpg',
        price :{
            mrp: 2499,
            discount: '68% OFF',
            discountedPrice: 799
        }
    },
    {
        category:'Slim Fit Formal Shirt',
        id:23,
        brand:'Louis Philippe',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16326814/2021/12/14/76c3426c-9831-403b-8692-91d81a45ec841639467012273-Louis-Philippe-Men-Shirts-5011639467011673-1.jpg',
        price :{
            mrp: 2499,
            discount: '40% OFF',
            discountedPrice: 1499
        }
    },
    {
        category:'Slim Semiformal Shirt',
        id:24,
        brand:'INVICTUS',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7561937/2019/5/6/0b56320d-f128-435f-bd2b-dafeba789a171557127152452-INVICTUS-Men-White--Blue-Slim-Fit-Printed-Smart-Casual-Shirt-7.jpg',
        price :{
            mrp: 1999,
            discount: '35% OFF',
            discountedPrice: 1299
        }
    },
    {
        category:'Slim Fit Solid Formal Shirt',
        id:25,
        brand:'Park Avenue',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16398118/2022/1/12/f2540531-c8fe-438a-b32d-13a94057559d1641980828754-Park-Avenue-Men-Pink-Slim-Fit-Solid-Pure-Cotton-Formal-Shirt-1.jpg',
        price :{
            mrp: 1799,
            discount: 'Rs. 800 OFF',
            discountedPrice: 999
        }
    },
    {
        category:'Easy Care Men Formal Shirt',
        id:26,
        brand:'INVICTUS',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13340280/2021/5/3/c955a673-3cb6-4bd3-a5a5-d0c3d19caea21620043498020INVICTUSMenNavyBlueWhiteSlimFitPureCottonPrintedFormalShirt5.jpg',
        price :{
            mrp: 1199,
            discount: '40% OFF',
            discountedPrice: 719
        }
    },
    {
        category:'Slim Fit Opaque Formal Shirt',
        id:27,
        brand:'Louis Philippe Sport',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14307340/2021/10/6/fff7cacc-b233-436d-bb91-e588bb2d27b21633504543325-Louis-Philippe-Sport-Men-Shirts-311633504542604-1.jpg',
        price :{
            mrp: 2299,
            discount: '31% OFF',
            discountedPrice: 1586
        }
    },
    {
        category:'Slim Fit Formal Shirt',
        id:28,
        brand:'Hancock',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1825917/2017/3/27/11490616116053-Hancock-Men-Shirts-5381490616115872-1.jpg',
        price :{
            mrp: 1599,
            discount: '50% OFF',
            discountedPrice: 799
        }
    },
    {
        category:'Slim Fit Checked Formal Shirt',
        id:29,
        brand:'INVICTUS',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10887642/2020/7/22/ec645fa4-2383-4a47-8fd7-c1cef992e6001595418597593-INVICTUS-Men-Navy-Blue--Red-Slim-Fit-Checked-Formal-Shirt-11-5.jpg',
        price :{
            mrp: 1499,
            discount: 'Rs. 500 OFF',
            discountedPrice: 999
        }
    },
    {
        category:'Formal Shirt',
        id:30,
        brand:'Peter England',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16459938/2021/12/11/3630327a-0a66-41e4-b965-6edb24dcc6941639215046912PeterEnglandMenBlackFormalShirt1.jpg',
        price :{
            mrp: '',
            discount: '',
            discountedPrice: 1599
        }
    },
    {
        category:'Men Slim Fit Formal Shirt',
        id:31,
        brand:'Hancock',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/1/518c7cfc-061f-4b6f-9340-b4593d6eaa1a1548965343911-1.jpg',
        price :{
            mrp: 1999,
            discount: '50% OFF',
            discountedPrice: 999
        }
    },
    {
        category:'Regular Fit Formal Shirt',
        id:32,
        brand:'INVICTUS',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13406442/2021/5/3/9b70583b-7a12-48a3-adb7-e2a51d8aedd41620043502081INVICTUSMenMaroonRegularFitSolidFormalShirt7.jpg',
        price :{
            mrp: 1299,
            discount: '45% OFF',
            discountedPrice: 714
        }
    },
    {
        category:'Slim Fit Solid Formal Shirt',
        id:33,
        brand:'Park Avenue',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16550176/2022/1/12/aedc1637-3b09-4c83-84a1-2621a98d33a91641980919663-Park-Avenue-Men-Violet-Slim-Fit-Solid-Pure-Cotton-Formal-Shi-1.jpg',
        price :{
            mrp: 2199,
            discount: '45% OFF',
            discountedPrice: 1209
        }
    },
    {
        category:'Men Slim Fit Formal Shirt',
        id:34,
        brand:'Hancock',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7460073/2018/9/21/1c88b4ea-b2b3-4c75-b1f5-82bff7252d8b1537519651731-NA-1711537519651556-1.jpg',
        price :{
            mrp: 1899,
            discount: '55% OFF',
            discountedPrice: 854
        }
    },
    {
        category:'Men Formal Shirt',
        id:35,
        brand:'Peter England',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16584546/2021/12/22/f43b77dc-5565-4853-a430-1ade99eae77a1640171053366PeterEnglandMenBlueFormalShirt1.jpg',
        price :{
            mrp: 1199,
            discount: '40% OFF',
            discountedPrice: 719
        }
    },
    {
        category:'Men Solid Slim Fit Formal Shirt',
        id:36,
        brand:'INVICTUS',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1271542/2018/2/9/11518152207903-INVICTUS-White-Slim-Fit-Formal-Shirt-9941518152207614-2.jpg',
        price :{
            mrp: 1799,
            discount: '50% OFF',
            discountedPrice: 899
        }
    },
    {
        category:'Slim Fit Solid Formal Shirt',
        id:37,
        brand:'Park Avenue',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16398092/2022/1/12/acb5f068-17ca-4d14-87d1-9cde2f10645b1641980781223-Park-Avenue-Men-Blue-Slim-Fit-Solid-Pure-Cotton-Formal-Shirt-1.jpg',
        price :{
            mrp: 1799,
            discount: 'Rs. 800 OFF',
            discountedPrice: 999
        }
    },
    {
        category:'Slim Fit Printed Formal Shirt',
        id:38,
        brand:'Louis Philippe',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16590556/2022/1/6/29e5d107-7f8c-4297-9b66-bcfa9590fcb71641458754693-Louis-Philippe-Men-Shirts-4431641458754170-1.jpg',
        price :{
            mrp: 2999,
            discount: '15% OFF',
            discountedPrice: 2549
        }
    },
    {
        category:'Men Printed Slim Fit Formal Shirt',
        id:39,
        brand:'INVICTUS',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/832437/2018/5/10/57551560-57a0-4059-a117-01da538acc071525936655656-INVICTUS-Mauve-Printed-Slim-Fit-Formal-Shirt-7341525936655291-2.jpg',
        price :{
            mrp: 1899,
            discount: '40% OFF',
            discountedPrice: 1139
        }
    },
    {
        category:'Self Weaved Formal Shirt',
        id:40,
        brand:'Tistabene',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16658652/2022/1/3/97ef675a-17d5-405e-b879-e3a851ddef0a1641203190412BlueSelfWeavedCottonShirt1.jpg',
        price :{
            mrp: 1299,
            discount: '10% OFF',
            discountedPrice: 1169
        }
    },
    {
        category:'Men Cotton Formal Shirt',
        id:41,
        brand:'Arrow',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16072302/2021/12/13/9ddf9032-ffa9-4b33-b435-9823964d99c81639390821179ShirtsArrowMenShirtsArrowMenShirtsArrowMenShirtsArrowMenShir1.jpg',
        price :{
            mrp: 2299,
            discount: '40% OFF',
            discountedPrice: 1379
        }
    },
    {
        category:'Tailored Fit Semiformal Lightwear',
        id:42,
        brand:'INVICTUS',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/486789/2016/12/19/11482142240591-INVICTUS-Men-White-Tailored-Fit-Formal-Shirt-4561482142240310-2.jpg',
        price :{
            mrp: 1599,
            discount: '50% OFF',
            discountedPrice: 799
        }
    },
    {
        category:'Men Slim Fit Formal Shirt',
        id:43,
        brand:'Hancock',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1983063/2017/6/30/11498804751272-Hancock-White-Solid-Pure-Cotton-Slim-Fit-Formal-Shirt-4931498804751100-1.jpg',
        price :{
            mrp: 1199,
            discount: '40% OFF',
            discountedPrice: 1999
        }
    },
    {
        category:'Slim Fit Formal Shirt',
        id:44,
        brand:'Arrow',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16054384/2021/12/13/9a9b7829-3539-4754-a1ac-bc84dec604611639390758973ShirtsArrowMenShirtsArrowMenShirtsArrowMenShirtsArrowMenShir1.jpg',
        price :{
            mrp: 2299,
            discount: '35% OFF',
            discountedPrice: 1494
        }
    },
    {
        category:'Slim Fit Formal Shirt',
        id:45,
        brand:'Raymond',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16070592/2021/12/7/3992c3cb-beb9-4ab5-a57f-350b916b39f81638869249688HERENOWWomenBluePinkEthnicMotifsPrintedKeyholeNeckKurtaTrous1.jpg',
        price :{
            mrp: 1899,
            discount: '30% OFF',
            discountedPrice: 1329
        }
    },
    {
        category:'Men Cotton Formal Shirt',
        id:46,
        brand:'JAINISH',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16588500/2022/1/13/e028422e-3878-40fb-b928-99ad7f55a7d81642052383874-JAINISH-Men-Brown--White-Pure-Cotton-Smart-Fit-Striped-Forma-1.jpg',
        price :{
            mrp: 1799,
            discount: '61% OFF',
            discountedPrice: 701
        }
    },
    {
        category:'Slim Fit Casual Shirt',
        id:47,
        brand:'United Colors of Benetton',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12957334/2020/12/7/3a38b295-2b76-4568-8463-15b8ec95d82e1607315507180-United-Colors-of-Benetton-Men-Navy-Blue-Pure-Cotton-Slim-Fit-1.jpg',
        price :{
            mrp: 2499,
            discount: '35% OFF',
            discountedPrice: 1624
        }
    },
    {
        category:'Men Slim Fit Easy Iron Shirt',
        id:48,
        brand:'H&M',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15193834/2021/8/19/f60472e2-871e-4f2c-b24a-08e9c2a4264e1629353922187SlimFitEasy-ironshirt1.jpg',
        price :{
            mrp: "",
            discount: '',
            discountedPrice: 1299
        }
    },
    {
        category:'Men Slim Fit Formal Shirt',
        id:49,
        brand:'Hancock',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7460067/2018/9/21/70680d67-69a3-4b33-b121-168bff8aae331537519529754-NA-4201537519529611-1.jpg',
        price :{
            mrp: 1999,
            discount: '55% OFF',
            discountedPrice: 999
        }
    },
    {
        category:'Men Formal Shirt',
        id:50,
        brand:'DENNISON',
        image:'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1950266/2018/12/11/070ee3ca-ae66-4d76-903f-66e6b4f01fba1544530432371-DENNISON-Men-Coffee-Brown-Comfort-Regular-Fit-Solid-Formal-S-1.jpg',
        price :{
            mrp: 1999,
            discount: '68% OFF',
            discountedPrice: 639
        }
    } 
]


const productsRef = document.querySelector(".products");

function render(allProducts){
    let products = "";
    let cartItems = JSON.parse(localStorage.getItem('cart'));
    
    if(!allProducts.length){
        allProducts = [...PRODUCTS];
    }

    allProducts.forEach(item=>{
        const {image,category,price,brand,id} = item;
        const {discountedPrice} = price;
        products+=(`
        <div class='single-product' id=${id}>  
            
            <div class="product-img">
                <img src=${image}>
            </div>
            <div>
                <p class="brand-name">${brand}</p>
                <p class="category">${category}</h1>
            </div>
            <div class="price-details">
                <span>Rs.${discountedPrice}</span>
                <span class="mrp-price">Rs.${price.mrp}</span>
                <span>${price.discount}</span>
            </div>
            <div class="quantity-box" id="quantity-${id}">
                <label for="quantity">Quantity </label>
                <input type="number" id="quantity" value="1" name="quantity" min="1" max="10">
            </div>
            <button class="shopping-button" id="shopping-${id}">
            Add to <i class="fas fa-cart-arrow-down"></i>
        </button> 
        </div>
        `)
    })

    if(cartItems.length!==0){
        document.querySelector('.cart-counter').innerHTML = cartItems.length;
    }
    productsRef.innerHTML = products; 
}

function renderFilteredProducts(filterCategories){

    const filteredProducts = [];
    for(let i = 0;i < filterCategories.length;i++){
        filteredProducts.push(...PRODUCTS.filter(item => item.brand.toLowerCase()=== filterCategories[i].toLowerCase())); 
    }
    render(filteredProducts);
}

function brandFiltering(){
    let checkboxes = document.querySelectorAll('.brand-filter-checkbox input[type=checkbox]');
    let filterCategories = [];

    for(let checkbox of checkboxes){

        checkbox.addEventListener('change',e=>{
        if(checkbox.checked){
            filterCategories.push(e.target.value);
        }      
        else{
            let index = filterCategories.indexOf(e.target.value);
            if(index!==-1){
                filterCategories.splice(index,1);
            }
        }
        renderFilteredProducts(filterCategories);
        })
    }
}


function priceFiltering(){
    let priceCheckboxes = document.querySelectorAll('.price-filter input[type=checkbox]');
    let filterPrices = [];
    for(let priceCheckbox of priceCheckboxes){

        priceCheckbox.addEventListener('change',(e)=>{
            document.querySelectorAll('.brand-filter-checkbox input[type=checkbox]').checked = false;
            if(priceCheckbox.checked){
                filterPrices.push(e.target.value);
            }
            else{
                let index = filterPrices.indexOf(e.target.value);
                if(index!== -1){
                    filterPrices.splice(index,1);
                }
            }
            renderFilteredProductsOnPrice(filterPrices)
        })
    }
}

function renderFilteredProductsOnPrice(filterPrices){

   const filterArray = [...filterPrices.map(item=> parseInt(item,10))]; 
    const filteredPrice = Math.min(...filterArray);   
   const filteredProducts  = PRODUCTS.filter(item => item.price.discountedPrice >= filteredPrice);

   render(filteredProducts);
}

function renderBasedOnSearch(){
    const searchBox = document.querySelector('.search-box input[type=text]');

    searchBox.addEventListener('keyup',(e)=>{
        searchDebounce(e.target.value);
    })

}

const searchDebounce = debouncedSearch(searchProducts,300);

function debouncedSearch(fn,delay){
    let timeout = 0;
    return function(...args){
        if(timeout){
            clearTimeout(timeout);
        }
        timeout = setTimeout(()=> fn.call(this,...args),delay)
    }
}


function searchProducts(searchValue){

    searchValue = searchValue.toLowerCase();
    const products = PRODUCTS.filter(item=>{
         const {brand,category} = item;
         return brand.toLowerCase().includes(searchValue) || category.toLowerCase().includes(searchValue);
    })

    render(products);
}

render(PRODUCTS);
brandFiltering();
priceFiltering();
renderBasedOnSearch();


////cart functionality

let singleProduct = document.querySelector('.products');
let cartCounter = document.querySelector('.cart-counter');
let shoppingButtons = document.querySelectorAll('.shopping-button');

shoppingButtons.forEach(item=>{
    item.addEventListener('click',(e)=>{
    
    let cartItems = [];
    cartCounter.style.display = "block";

    let productID = e.target.offsetParent.id;
    document.getElementById(`shopping-${productID}`).style.display="none";
    document.getElementById(`quantity-${productID}`).style.display = "flex"; 
    const filteredProductsBasedOnId = PRODUCTS.filter(item => item.id == productID);
    filteredProductsBasedOnId[0]["quantity"] = 1;
    if(localStorage.getItem('cart')){
       cartItems = JSON.parse(localStorage.getItem('cart')); 
    }


    cartItems.push(filteredProductsBasedOnId[0]);
    let cartItemsCount = cartItems.length;

    cartCounter.innerHTML = cartItemsCount;
    window.localStorage.setItem('cart',JSON.stringify(cartItems));
    console.log(localStorage.getItem('cart'));
})
})


///quantity-box;

let quantityBoxes = document.querySelectorAll('.quantity-box input[type=number]');

quantityBoxes.forEach(item=>{
    item.addEventListener('change',(e)=>{
        // console.log(e.target.value);
        let productID = e.target.offsetParent.id;
        console.log(productID,e.target.value);

        let cart = JSON.parse(localStorage.getItem('cart'));
        let newCart = cart.map(item=> {
            if(item.id== productID){
                item["quantity"] = e.target.value;
            }
            return item;
        })

        localStorage.setItem('cart',JSON.stringify(newCart));
       
        console.log(localStorage.getItem('cart'));
    })
})





