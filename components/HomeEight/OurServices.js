import React from "react";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <div className="services-area-eight pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">عيادة دكتور زيادة</span>
            <h2>خدماتنا</h2>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
              vel consequatur tempora atque blanditiis exercitationem incidunt,
              alias corporis quam assumenda dicta, temporibus.
            </p> */}
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <span>
                  <img src="/img/taqweem.png" alt="Image" />
                </span>
                <h3>التقويم</h3>
                <p>
اذا كنت تعانى من بروز الأسنان أو تزاحم الاسنان أو أى مشاكل أخري تجعلك غير راض عن شكل اسنانك
عيادة دكتور زيادة هى المكان المناسب لبداية جديدة لأبتسامة أكثر جمالا لك ولاطفالك.
                </p>

                <Link href="/services-1" className="read-more">
                  المزيد <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <span>
                  <img src="/img/veneers.png" alt="Image" />
                </span>
                <h3>الفينير</h3>
                <p>
                الخيار الأمثل للحصول على ابتسامة مثالية ! فينير الأسنان المعروف أيضا بالعدسات اللاصقة للأسنان، هو إجراء تجميلي لتحصل على ابتسامه جذابة اكثر
فقد حان الوقت لرؤية ابتسامتك أكثر جاذبية مع خبراء عيادة دكتور زيادة .
                </p>

                <Link href="/services-1" className="read-more">
                  المزيد <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <span>
                  <img src="/img/implant.png" alt="Image" />
                </span>
                <h3>زراعة الأسنان</h3>
                <p>
                زراعة الأسنان ستجعلك تتمتع باسنان جديدة منسجمة جيدا مع باقي الأسنان الطبيعية،لأعطاء مظهر صحي و متناغم، فهى حل رائع ومتكامل مقارنة بالخيارات الترميميةالأخرى كالطقم المتحرك.
                </p>

                <Link href="/services-1" className="read-more">
                  المزيد <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

        
       

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <span>
                  <img src="/img/children.png" alt="Image" />
                </span>
                <h3>عيادة الأطفال</h3>
                <p>
                لنجعلهم يستمتعون بطفولتهم بدون خوف أو قلق فإن طب الأسنان الوقائي مهم جدا في علاج الأسنان للأطفال، لدى خبراء قسم الأطفال فى عيادة دكتور زيادة العديد من الإجراءات والطرق لحمايةأسنان طفلك وجعل ابتسامته دائما جميلة
                </p>

                <Link href="/services-1" className="read-more">
                  المزيد <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
