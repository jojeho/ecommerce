/* <li data-goodsid="G000309288" class="slick-slide slick-current slick-active" tabindex="-1" aria-describedby="slick-slide86" style="width: 413px;" data-slick-index="6" aria-hidden="false">
<div class="rank-label" style="display:none;">
    TOP<span>7</span>
</div>
<div class="rvpd-box">
    <a href="javascript:;" class="rvpd-img" onclick="openCtaLink(&quot;/sec/buds/galaxy-buds-fe-r400/SM-R400NZWAKOO/&quot;,&quot;_self&quot;);" data-omni="home:personalization:prd img:SM-R400NZWAKOO" data-mo-code="SM-R400NZWAKOO" data-goods-nm="갤럭시 버즈 FE" data-disp-ctg-en-nm-path="mobile > buds > galaxy-buds-fe" data-requestid="sec:1701580433:158389" tabindex="0">
        <img class="lozad" src="//images.samsung.com/kdp/goods/2023/10/06/d1fb4ea7-9082-48f2-ba1f-55ec275b4834.png?$THUB_SHOP_S$" alt="갤럭시 버즈 FE" data-loaded="true">
        </a>`
    <div class="rvpd-txt">
        <div class="rvpd-pd-name" onclick="openCtaLink(&quot;/sec/buds/galaxy-buds-fe-r400/SM-R400NZWAKOO/&quot;,&quot;_self&quot;);" style="cursor:pointer;" data-omni="home:personalization:prd name:SM-R400NZWAKOO" data-mo-code="SM-R400NZWAKOO" data-goods-nm="갤럭시 버즈 FE" data-disp-ctg-en-nm-path="mobile > buds > galaxy-buds-fe" data-requestid="sec:1701580433:158389">갤럭시 버즈 FE</div>
        <div class="rvpd-pd-pdnum">SM-R400NZWAKOO</div>
        <div class="rvpd-pd-pricebox">
            <div class="price rvpd-price-detail">
                <input type="hidden" name="priceStr" value="594198|10|119000|119000|99000" tabindex="0">
                <input type="hidden" name="cpAllDcAmt" value="0" tabindex="0">
                <input type="hidden" name="flagTime" value="0" tabindex="0">
                <input type="hidden" name="outletFlgYn" value="" tabindex="0">
                <div class="rvpd-pd-tit">혜택가</div>
                    <div class="flex">
                    <div class="rvpd-pd-price">99,000<span>원</span></div>
                        <!-- s: 툴팁 영역 -->
                    <div class="rvpd-pd-tooltip">
                        <button type="button" class="btn-tooltip-rvpd" aria-hidden="true" style="display:none;" tabindex="0">
                            <span class="blind">툴팁보기(레이어 열림)</span>
                        </button>
                        <div class="tooltip-layer rvpd-tip-box" aria-hidden="true">
                            <ul class="pdtt-content">
                                <li>
                                    <span class="pdtt-tit">기준가</span>
                                    <span class="pdtt-price">119,000원</span>
                                </li>
                                <li class="pdcp-box">
                                    <span class="pdtt-tit">쿠폰 적용 예상가</span> 
                                    <span class="pdtt-price">99,000원</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- e: 툴팁 영역 -->
                </div>
            </div>
            <div class="point">
                <div class="rvpd-pd-tit">적립 예정 포인트</div>
                <div class="rvpd-pd-point">
                99P
                    </div>
            </div>
        </div>
    </div>
</div>
<!-- s : 상품비교하기 영역 -->
<input type="hidden" name="cardCompareInfo" data-goods-id="G000309288" data-goods-tp-cd="10" data-mdl-nm="SM-R400" data-mdl-code="SM-R400NZWAKOO" data-goods-path="/sec/buds/galaxy-buds-fe-r400/SM-R400NZWAKOO/" data-review-grade="4.8" data-review-count="434" data-compare-excpt-yn="N" data-comp-disp-clsf-no="33120000" data-comp-disp-clsf-en-nm="buds" data-use-compare-yn="Y" data-is-homefitness-goods-yn="N" data-cptlytno="44" tabindex="0"><div class="rvpd-bottom" name="cardCompare"><div class="compare">      <a href="javascript:void(0);" class="link-compare-i" onclick="readyCompare(this)" data-goods-id="G000309288" data-mdl-code="SM-R400NZWAKOO" data-disp-clsf-no="33120000" data-comp-disp-clsf-en-nm="buds" data-omni="home:personalization:prd compare:SM-R400NZWAKOO" tabindex="0">비교하기</a></div>      <a class="rvpd-star" target="_blank" href="/sec/buds/galaxy-buds-fe-r400/SM-R400NZWAKOO/?focus=review" title="상품평점" data-review-grade="4.8" data-review-count="434" data-omni="home:personalization:prd review:SM-R400NZWAKOO" tabindex="0">          <strong>4.8</strong> (434)      </a></div>
<!-- e : 상품비교하기 영역-->
</li> */

import {useModel} from "@/data/home/Section2"
import css from "./section2.module.css"

function Body({content}:{content:PropsModel})
{
    console.log(content)
    return (

        <div className="flex flex-row gap-2 w-[371px] p-2 bg-slate-100 rounded-lg  ">
        <img src={content.img}></img>
        <div className="flex flex-col gap-2  w-full">
            <div>
            <h3>{content.title}</h3>
           
            </div>
            <div>
            <h2>{content.model}</h2>
            </div>
            <div className="flex flex-row justify-between">
                <h1>
                  {content.price.label}
                </h1>
                <h1 >{content.price.value}<em>원</em></h1>
                
            </div>
            <div className="flex flex-row justify-between">
                <p >{content.point.label}</p>
                <p >{content.point.value}<em>P</em></p>
            </div>
        </div>
      </div>
     
    )
}



function footer(content:FooterItem)
{
    return (
        <div className="flex flex-row justify-between">
            <p>{content.title}</p>
            <img src={content.img}></img>
            <p>{content.score}</p>
            <span>(</span>
            <p>{content.count}</p>
            <span>)</span>
          
        </div>
    )
}

export default function App({ss}:{ss:string})
{
    const contents = useModel()
    return (
      <ul className={css.ul}>  
       {contents.map((item,index)=>(  
        <li key={index}>
         <Body  content={item}></Body>
         </li> 
       ))}  
       
      </ul>
    )
}


