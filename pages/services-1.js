import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import OurWorks from "../components/HomeOne/OurWorks";

const Services1 = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="خدماتنا"
        homePageUrl="/"
        homePageText="الرئيسية"
        activePageText="خدماتنا"
        imgClass="bg-1"
      />

<div className="scrives-item-2 mt-4 ">
      <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="services-img">
                  <img
                    src="/img/taqweem-details.jpeg"
                    alt="Image"
                  />
                </div>
              </div>

              <div className="col-lg-8">
                <h3>التقويم</h3>
                <p>
                اذا كنت تعانى من بروز الأسنان أو تزجم الاسنان أو أى مشاكل أخرىتجعلك غير راض عن شكل اسنانك عيادة دكتور زيادة هى المكان المناسب لبداية جديدة لأبتسامة أكثر جمالا لك ولاطفالك.لا داعى للقلق بشأن شكل تقويم الأسنان فلدينا اختيارات كثيره غير تقليدية ، و اذا كنتتبحث عن التقويم الشفاف فأنت فى المكان الصحيح نحن نوفر لك حلولا و اختيارات مخصصة لك لتستمتع بجمال ابتسامة صحية.
                </p>
              </div>
            </div>
            <div className="row align-items-center mt-5">
              <div className="col-lg-4">
                <div className="services-img">
                  <img
                    src="/img/veneers-details.jpeg"
                    alt="Image"
                  />
                </div>
              </div>

              <div className="col-lg-8" >
                <h3>الفينير</h3>
                <p>
االخيار الأمثل للحصول على ابتسامة مثالية ! فينير الأسنان المعروف أيضا بالعدساتاللاصقة للأسنان، هو إجراء تجميلي لتحصل على ابتسامه جذابة اكثر . يصنع فينيرالأسنان من مواد معالجة ناصعة البياض وعالية التحمل في مختبرات خاصةخصيصا لك لتحصل على ابتسامة مثالية، اذا كانت أسنانك غير متساوية في الحجم، أوتعانى من الفجوات أو الفراغات. فلقد حان الوقت لرؤية ابتسامتك أكثر جاذبية مع خبراء عيادة دكتور زيادة .
                </p>
              </div>
            </div>
            <div className="row align-items-center mt-4" >
              <div className="col-lg-4">
                <div className="services-img">
                  <img
                    src="/img/implant-details.jpeg"
                    alt="Image"
                  />
                </div>
              </div>

              <div className="col-lg-8 mt-5">
                <h3>زراعة الأسنان</h3>
                <p>
لاننا نعرف مدى أهمية الأبتسامة ، مع خبراء عيادة دكتور زيادة وداعاللأسنان المفقودة و التالفة. زراعة الأسنان ستجعلك تتمتع باسنان جديدة منسجمة جيدا مع باقي الأسنان الطبيعية،لأعطاء مظهر صحي و متناغم، فهى حل رائع ومتكامل مقارنة بالخيارات الترميميةالأخرى كالطاقم المتحرك. تضمن لك زراعة الأسنان زيادة الثقة بالنفس، و تمنحك الكثير من الحرية لمواصلةحياتك دون قلق أو إحراج.
                </p>
              </div>
            </div>
            <div className="row align-items-center mt-4 mb-4">
              <div className="col-lg-4">
                <div className="services-img">
                  <img
                    src="/img/children-details.jpeg"
                    alt="Image"
                  />
                </div>
              </div>

              <div className="col-lg-8">
                <h3>عيادة الأطفال</h3>
                <p>
                لان ابتسامه طفلك تصنع فارقا فى يومك، نحن نهتم بصحة اسنانه ليبدوا العالم دائما أكثرإشراقا .** الكثير من اللعب و المرح يمكن ان ينتج عنه كسور في الأسنان، و الكثير من الحلوياتتتسبب فى تسوس أسنانه اللبنية كما هو الحال مع الأسنان الدائمة.لنجعلهم يستمتعون بطفولتهم بدون خوف أو قلق فإن طب الأسنان الوقائي مهم جدا في علاج الأسنان للأطفال.لدى خبراء قسم الأطفال فى عيادة دكتور زيادة العديد من الإجراءات والطرق لحمايةأسنان طفلك وجعل ابتسامته دائما جميلة.
                </p>
              </div>
            </div>
      </div>
          </div>

      <Footer />
    </>
  );
};

export default Services1;
