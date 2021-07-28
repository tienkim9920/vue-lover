
<h2>Xây dựng Website Hẹn Hò VueJS & NodeJS (API, Socket)</h2>
<h3>Mô tả chung , giới thiệu đề tài </h3>
<b>Người độc thân, hãy lắng nghe: nếu bạn đang tìm kiếm tình yêu, muốn bắt đầu hẹn hò, hoặc chỉ giữ bình thường thì bạn cần phải ở bên Người yêu. Với hơn 55 tỷ trận đấu được thực hiện, đó là nơi để bạn gặp gỡ trận đấu hay nhất tiếp theo. Hãy thành thực mà nói, bối cảnh hẹn hò trông rất khác, vì hầu hết mọi người đang gặp gỡ trực tuyến. Với Lover, ứng dụng hẹn hò miễn phí phổ biến nhất thế giới, bạn có hàng triệu người độc thân khác trong tầm tay và tất cả họ đều sẵn sàng để gặp một người như bạn.</b>

---------------------------------------------------------------
 
## Contributors
- TienKim

## ERD
<img src="https://firebasestorage.googleapis.com/v0/b/todo-app-tienkim.appspot.com/o/ERD_Lover.PNG?alt=media&token=80c4aa7e-4c76-47cf-9c25-61d661e65f27" />

## USECASE
<h3>* Khách Hàng</h3>
<img src="https://firebasestorage.googleapis.com/v0/b/todo-app-tienkim.appspot.com/o/KhachHang.PNG?alt=media&token=07f504bd-6d34-4da4-abe7-a82de78293d2" />

## API
ROOT API ENDPOINT : http://tienkim9920.herokuapp.com

```bash

- api/product : PRODUCT API ENDPOINT

    - router.get('/', Products.index)

    - router.get('/category', Products.category)

    - router.get('/:id', Products.detail)

    - router.get('/category/gender', Products.gender)

    - router.get('/category/pagination', Products.pagination)

    - router.get('/scoll/page', Products.scoll)
  
```


## Get Started

``` bash
# install dependencies
npm install
```
``` bash
# run project
npm start
```


## Technical details
- Nodejs, VueJS.
- Express.
- Mongodb, Mongoose.
- SocketIO.
- ResfulAPI


