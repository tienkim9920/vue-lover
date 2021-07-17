<template>
    <div class="header-intro">
        <div class="header-logo">
            <img src="../assets/icon.png" alt="">
            <h1>Lover</h1>
        </div>
        <div class="header-login">
            <a class="btn-login" data-bs-toggle="modal" data-bs-target="#login">Log in</a>
        </div>
    </div>
    <div class="banner-intro">
        <div class="title-intro">
            <h1>Swipe Right</h1>
            <div class="parent-btn-create">
                <a class="btn-create">Create Account</a>
            </div>
        </div>
    </div>

    <div class="modal fade" id="login">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="d-flex justify-content-end">
                    <i class="fa fa-remove close-login" data-bs-dismiss="modal" aria-label="Close"></i>
                </div>
                <div class="p-modal-login">
                    <div class="d-flex justify-content-center">
                        <div class="text-center">
                            <img class="img-modal-login" src="../assets/icon.png" alt="">
                            <h3 class="h-start">GET STARTED</h3>
                        </div>
                    </div>
                    <div class="text-center">
                        <p class="chitiet-modal">
                            By clicking Log In, you agree to our Terms. 
                            Learn how we process your date in our Privacy Policy and Cookie Policy
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Intro",
    setup() {
        
    },
}
</script>

<style>

.chitiet-modal{
    font-size: .85rem;
    font-family: 'Raleway', sans-serif;
}

.h-start{
    font-weight: bold;
    font-style: italic;
}

.img-modal-login{
    width: 100px;
}

.header-intro{
    position: fixed;
    width: 100%;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
}

.header-logo{
    display: flex;
    
}

.header-logo h1{
    margin-top: 1rem;
    color: #fff;
}

.header-logo img{
    width: 80px;
    height: 80px;
}

.banner-intro{
    background-image: url(../assets/gioithieu.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 100%;
    height: 721px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-login{
    margin-top: 2rem;
}

.btn-login{
    text-decoration: none;
    color: #FD546C;
    text-transform: uppercase;
    letter-spacing: .05rem;
    font-size: .9rem;
    padding: .6rem 1.6rem;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
}

.btn-login:hover{
    background-color: #FD546C;
    color: #fff;
    transition: all .1s ease;
}

.title-intro h1{
    color: #fff;
    font-size: 6rem;
}

.parent-btn-create{
    text-align: center;
    margin-top: 2rem;
}

.btn-create{
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: .05rem;
    font-size: 1rem;
    padding: 1rem 3.8rem;
    background-color: #FD546C;
    border-radius: 2rem;
    cursor: pointer;

}

.btn-create:hover{
    background-color: #fc415d;
    color: #fff;
    transition: all .1s ease;
}

.close-login{
    font-size: 30px;
    color: #323232;
    margin-right: 1rem;
    margin-top: .6rem;
    cursor: pointer;
}

.p-modal-login{
    padding: 0 2rem;
}

@media only screen and (max-width: 600px){
    .title-intro h1{
        font-size: 4rem;
    }

    .header-intro{
        padding: 0 1rem;
    }
}

</style>