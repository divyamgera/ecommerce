
import BlogImg1 from '../assets/blog-04.jpg';
import BlogImg2 from '../assets/blog-05.jpg';
import BlogImg3 from '../assets/blog-06.jpg';
import { CgArrowLongRight } from "react-icons/cg";
import { HiSearch } from "react-icons/hi";
import FeatureProductImg1 from '../assets/product-min-01.jpg'
import FeatureProductImg2 from '../assets/product-min-02.jpg'
import FeatureProductImg3 from '../assets/product-min-03.jpg'
import '../pagesStyles/Blog.css'
const Blog = () =>{
  return (
    <>
        
        <section className="bgBlog">
          <h2 className="htext">Blog</h2>
        </section>

        <section className="bgW">
          <div className="container ">
            <div className="row">

              <div className="col-md-9  p-b-80">

                <div className="p-r-45">

                  <div className="p-b-63">
                    <a href="#" className="hovBImg">
                      <img src={BlogImg1}  />
                      <div className="bDate">
                        <span className="day">22</span>
                        <span className="mYear">Jan 2018</span>
                      </div>
                    </a>

                    <div className="p-t-32">
                      <h4 className="p-b-15"><a href="#" className="ltext-108">8 Inspiring Ways to Wear Dresses in the Winter</a></h4>
                      <p className="stext-117">
									Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
								</p>

                <div className="p-t-18">

                  <span className="p-r-30"> 

                    <span>
                      <span className="c14">By</span>
                      Admin
                      <span className="c112">|</span>
                    </span>

                    <span>
                      StreetStyle, Fashion, Couple 
                      <span className="c112">|</span>

                    </span>
                    <span>8 Comments</span>
                    
                     </span>

                     <a href="#" className="cRead">
                      Continue Reading <CgArrowLongRight />


                     </a>

                </div>

                    </div>
                  </div>

                    <div className="p-b-63">
                    <a href="#" className="hovBImg">
                      <img src={BlogImg2}  />
                      <div className="bDate">
                        <span className="day">22</span>
                        <span className="mYear">Jan 2018</span>
                      </div>
                    </a>

                    <div className="p-t-32">
                      <h4 className="p-b-15"><a href="#" className="ltext-108">8 Inspiring Ways to Wear Dresses in the Winter</a></h4>
                      <p className="stext-117">
									
									Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
								
								</p>

                <div className="p-t-18">

                  <span className="p-r-30"> 

                    <span>
                      <span className="c14">By</span>
                      Admin
                      <span className="c112">|</span>
                    </span>

                    <span>
                      StreetStyle, Fashion, Couple 
                      <span className="c112">|</span>

                    </span>
                    <span>8 Comments</span>
                    
                     </span>

                     <a href="#" className="cRead">
                      Continue Reading <CgArrowLongRight />


                     </a>

                </div>

                    </div>
                  </div>

                    <div className="p-b-63">
                    <a href="#" className="hovBImg">
                      <img src={BlogImg3}  />
                      <div className="bDate">
                        <span className="day">22</span>
                        <span className="mYear">Jan 2018</span>
                      </div>
                    </a>

                    <div className="p-t-32">
                      <h4 className="p-b-15"><a href="#" className="ltext-108">8 Inspiring Ways to Wear Dresses in the Winter</a></h4>
                      <p className="stext-117">
									Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
								</p>

                <div className="p-t-18">

                  <span className="p-r-30"> 

                    <span>
                      <span className="c14">By</span>
                      Admin
                      <span className="c112">|</span>
                    </span>

                    <span>
                      StreetStyle, Fashion, Couple 
                      <span className="c112">|</span>

                    </span>
                    <span>8 Comments</span>
                    
                     </span>

                     <a href="#" className="cRead">
                      Continue Reading <CgArrowLongRight />


                     </a>

                </div>

                    </div>
                  </div>




                </div>

              </div>




              <div className="col-md-3   p-b-80">
                <div className="side-menu">
                  <div className="sBox"> 
                    <input className="search" type="text" placeholder="Search" />
                    <button className="sButton"><HiSearch />
                      
                    </button>
                     </div>

                  <div className="p-t-55">
                    <h4 className="h4-Text">Categories</h4>
                    <ul>
                      <li className="bor18">
                        <a href="#" className="catgName">Fashion</a>
                      </li>
                       
                      <li className="bor18">
                        <a href="#" className="catgName">Beauty</a>
                      </li>

                      <li className="bor18">
                        <a href="#" className="catgName">Street Style</a>
                      </li>

                      <li className="bor18">
                        <a href="#" className="catgName">Life Style</a>
                      </li>

                      <li className="bor18">
                        <a href="#" className="catgName">DIY & Crafts</a>
                      </li>
                    </ul>
                  </div>

                  <div className="p-t-65">
                    <h4 className="h4-Text">Featurd Products</h4>
                    <ul>

                      <li className="FeaboxItem">
                        <a href="#" className="wrao-pic">
                          <img src={FeatureProductImg1}  />
                        </a>

                        <div className="size-215">
                          <a href="#" className="desText">White Shirt With Pleat Detail Back</a>
                          <span className="priceText">$19.00</span>
                        </div>
                      </li>

                      <li className="FeaboxItem">
                        <a href="#" className="wrao-pic">
                          <img src={FeatureProductImg2}  />
                        </a>

                        <div className="size-215">
                          <a href="#" className="desText">White Shirt With Pleat Detail Back</a>
                          <span className="priceText">$19.00</span>
                        </div>
                      </li>

                      <li className="FeaboxItem">
                        <a href="#" className="wrao-pic">
                          <img src={FeatureProductImg3}  />
                        </a>

                        <div className="size-215">
                          <a href="#" className="desText">White Shirt With Pleat Detail Back</a>
                          <span className="priceText">$19.00</span>
                        </div>
                      </li>
                    </ul>



                  </div>

                  <div className="p-t-55">
                    <h4 className="h4-Text">Archive</h4>
                    <ul>

                      <li className="p-b-7">
                        <a href="#" className="stext-115">

                          <span>July 2018</span>
                          <span>(9)</span>

                        </a>
                      </li>

                      <li className="p-b-7">
                        <a href="#" className="stext-115">

                          <span>June 2018</span>
                          <span>(39)</span>

                        </a>
                      </li>

                      <li className="p-b-7">
                        <a href="#" className="stext-115">

                          <span>May 2018</span>
                          <span>(29)</span>

                        </a>
                      </li>

                      <li className="p-b-7">
                        <a href="#" className="stext-115">

                          <span>April 2018</span>
                          <span>(35)</span>

                        </a>
                      </li>

                      <li className="p-b-7">
                        <a href="#" className="stext-115">

                          <span>March 2018</span>
                          <span>(22)</span>

                        </a>
                      </li>

                      <li className="p-b-7">
                        <a href="#" className="stext-115">

                          <span>February 2018</span>
                          <span>(32)</span>

                        </a>
                      </li>

                      <li className="p-b-7">
                        <a href="#" className="stext-115">

                          <span>January 2018</span>
                          <span>(21)</span>

                        </a>
                      </li>

                      <li className="p-b-7">
                        <a href="#" className="stext-115">

                          <span>December 2017</span>
                          <span>(26)</span>

                        </a>
                      </li>

                    </ul>

                  </div>

                  <div className="p-t-50">

                    <h4 className="h4-Text">Tags</h4>

                    <div className="tags">
                      <a href="#" className="tag">Fashion</a>
                      <a href="#" className="tag">Lifestyle</a>
                      <a href="#" className="tag">Denim</a>
                      <a href="#" className="tag">Streetstyle</a>
                      <a href="#" className="tag">Crafts</a>
                    </div>

                  </div>

                </div>


              </div>

            </div>
          </div>

        </section>


    

    </>
  )
}

export default Blog;