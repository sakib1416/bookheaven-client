import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 class="h2">Blog</h2>
                <div class="row">
                    <div class="col-sm-4 text-center">
                        <img src="images/blog-1-720x480.jpg" class="img-fluid" alt="" />

                        <h2 class="m-n"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h2>

                        <p> John Doe &nbsp;|&nbsp; 12/06/2020 10:30</p>
                    </div>

                    <div class="col-sm-4 text-center">
                        <img src="images/blog-2-720x480.jpg" class="img-fluid" alt="" />

                        <h2 class="m-n"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h2>

                        <p> John Doe &nbsp;|&nbsp; 12/06/2020 10:30</p>
                    </div>

                    <div class="col-sm-4 text-center">
                        <img src="images/blog-3-720x480.jpg" class="img-fluid" alt="" />

                        <h2 class="m-n"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h2>

                        <p> John Doe &nbsp;|&nbsp; 12/06/2020 10:30</p>
                    </div>
                </div>

                <p class="text-center"><a href="blog.html">Read More &nbsp;<i class="fa fa-long-arrow-right"></i></a></p>
       
        </div>
    );
};

export default Blogs;