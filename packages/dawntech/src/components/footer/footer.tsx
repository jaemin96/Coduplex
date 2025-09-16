import Link from "next/link";
import { siteConfig } from "@/config";

type DTfooterProps = {};

const DTfooter: React.FC<DTfooterProps> = (props) => {
  /* === state === */

  /* === handler === */

  return (
    <>
      <div className="footer">
        <div className="footer-container">
          {/* 회사명 */}
          <div className="company">
            <h1>{siteConfig.company ?? "-"}</h1>
          </div>
          {/* 대표 & 사업자등록번호 */}
          <div className="rep">
            <div className="ceo">
              <span className="rep-title">{`대표`}</span>
              <span className="rep-content">{siteConfig.ceo ?? "-"}</span>
            </div>
            <div className="companyRN">
              <span className="rep-title">{`사업자등록번호`}</span>
              <span className="rep-content">
                {siteConfig.businessNumber ?? "-"}
              </span>
            </div>
          </div>
          {/* 주소 | 전화 & 팩스 | 이메일 */}
          <div className="contact">
            <div className="contact-address">
              <span className="contact-title">{`주소`}</span>
              <span className="contact-content">
                {siteConfig.address ?? "-"}
              </span>
            </div>
            <div className="contact-call call">
              <div className="call-tel">
                <span className="contact-title">{`전화`}</span>
                <span className="contact-content">{siteConfig.tel ?? "-"}</span>
              </div>
              <div className="call-fax">
                <span className="contact-title">{`팩스`}</span>
                <span className="contact-content">{siteConfig.fax ?? "-"}</span>
              </div>
            </div>
            <div className="contact-email">
              <span className="contact-title">{`이메일`}</span>
              <span className="contact-content">{siteConfig.email ?? "-"}</span>
            </div>
          </div>
          {/* 개인정보취급방침 | 이메일무단수집거부 | 사이트맵 */}
          <div className="service">
            <ul className="service-items">
              <li className="privacy">
                <Link href="/service/privacy">{`개인정보취급방침`}</Link>
              </li>
              <li className="reject">
                <Link href="/service/reject">{`이메일무단수집거부`}</Link>
              </li>
              <li className="sitemap">
                <Link href="/service/sitemap">{`사이트맵`}</Link>
              </li>
            </ul>
          </div>
          {/* 구분선 */}
          <div className="boundary"></div>
          {/* copyright */}
          <span className="copyright">{siteConfig.copyright ?? "-"}</span>
        </div>
      </div>
    </>
  );
};

export default DTfooter;
