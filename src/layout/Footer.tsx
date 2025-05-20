import React from 'react';
import { Link } from "react-router-dom";

interface FooterProps<T = Record<string, unknown>> {
    footerVariant: string;
    additionalProps?: T;
}

const Footer: React.FC<FooterProps<Record<string, unknown>>> = ({ footerVariant}) => {
    const footerConfig = footerVariant !== "basic" 
        ? { footerClass: "blFooter", imgSrc: "https://d-hye.github.io/source/img/logo/logo_TRT_wh.svg" }
        : { footerClass: null, imgSrc: "https://d-hye.github.io/source/img/logo/logo_TRT_basic.svg" };

    const { footerClass, imgSrc } = footerConfig;

    return (
        <div className={`footerArea ${footerClass}`}>
            <footer className="subFooter">
                <div className="container d-flex justify-content-between align-items-end">
                    <div className="imgbox">
                        <img src={imgSrc} alt="trip:ter" />
                    </div>
                    <div className="footer_menu">
                        <ul className="d-flex">
                            <li><Link to="#none">회사소개</Link></li>
                            <li><Link to="#none">사업자정보</Link></li>
                            <li><Link to="#none">이용약관</Link></li>
                            <li><Link to="#none">개인정보 처리방침</Link></li>
                            <li><Link to="#none">제휴 / 광고 문의</Link></li>
                        </ul>
                        <div>
                            <div className="company_info d-flex">
                                <i>(주)트립터</i>
                                <i><span>대표자</span> 신은경</i>
                                <i><span>고객센터</span> 0000-0000</i>
                                <i><span>주소</span> 서울특별시 구로구 구로5동 3-25 602호</i>
                                <i><span>메일</span> help@tripter.com</i>
                            </div>
                            <div className="company_id d-flex">
                                <i><span>사업자등록번호</span> 0000000-0000</i>
                                <i><span>통신판매입신고번호</span> 제0000-서울00-0000호</i>
                                <i><span>관광사업자등록번호</span> 제0000-000000호</i>
                                <i>© 2025 Trip:ter, Inc</i>
                            </div>
                        </div>
                    </div>
                    <div className="download_btn">
                        <Link to="#">트립터 앱 다운로드</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;