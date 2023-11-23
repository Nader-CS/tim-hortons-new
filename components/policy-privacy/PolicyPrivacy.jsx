import Image from "next/image";
import Card from "../ui/card/Card";
import classes from "./PolicyPrivacy.module.css";

const PolicyPrivacy = () => {
  return (
    <section className="container mx-auto">
      <article>
        <div className="my-5 md:flex md:flex-wrap">
          <div className="hidden md:block md:w-[40%]">
            <Image
              src="/assets/images/policy/privacy.png"
              width={400}
              height={200}
              style={{ objectFit: "fill" }}
              className="h-[100%]"
            />
          </div>
          <div className=" mx-3 lg:mx-0 md:w-[55%] ">
            <Card className="rounded-lg bg-[#F8F5EF] p-3 px-[3rem] lg:h-[100%] lg:flex lg:flex-col justify-center items-center lg:items-start">
              <h1
                className={`text-[#3B2222] text-[25px] ${classes["sofia-font-block"]} text-center  mb-5`}
              >
                Privacy Policy Highlights
              </h1>
              <p
                className={`text-center md:text-left w-[95%] md:w-[100%] mx-auto ${classes["sofia-font"]}`}
              >
                TIM HORTONS® Privacy Policy describes the information we collect
                and how it is used and shared. This policy applies to any
                information collected about you by Tim Hortons when you do any
                of the following (collectively, the “Services”): (i) visit a Tim
                Hortons store, or (ii) use in the GCC the website, mobile or
                tablet application, digital in-restaurant kiosk, or other online
                service This summary provides the highlights of our policy.
              </p>
            </Card>
          </div>
        </div>
        <div className=" lg:pt-[3rem] lg:pb-[5rem]">
          <div className="text-[#3B2222] px-5 md:px-2">
            <h1 className={`${classes["sofia-font-block"]} text-[15px]`}>
              Information We Collect
            </h1>
            <div className={`${classes["sofia-font"]}`}>
              <p className="my-3">
                When you make a purchase on one of our store or via our app, we
                collect various types of information about our users in
                connection with the Services, including:
              </p>
              <p>Information you provide to us;</p>
              <p>Information we collect about your use of our Services;</p>
              <p>Information about your use of the Services; and</p>
              <p>Information we obtain from third-party sources.</p>
              <p className="mb-3">
                We also may collect information in ways that we describe to you at the point of collection or otherwise with your consent.
              </p>
              <p className="mb-3">
                When you purchase an item online via our website or our app, we
                collect your name and – in case you are a small business – your
                company name, full postal and/or separate billing address,
                e-mail address, ordered and returned products, delivery
                information and invoice information. We will also collect data
                on your usage vouchers and/or gift cards. Furthermore, you may
                choose to provide us with your date of birth and telephone
                number. We do not collect information related to the payment
                instrument that you use, e.g. credit card information. This
                information is processed solely by our payment service provider
                and by the providers of the payment instruments subject to
                strict information security assurances.
              </p>
              <p className="mb-3">
                During the purchasing process, you have the option to set up a
                personal Tim Hortons account. If you choose to do so, we will
                ask you to consent to receiving newsletters and other
                (electronic) communications via post, e-mail and/or SMS. You can
                log-on to your account through your Facebook, Google+, Instagram
                and other social media accounts. If you choose to make use of
                this functionality, we will collect basic profile information
                from your social media account, including name and e-mail
                address. Please note that the social media provider through
                which you are signing in to your Tim Hortons account will be
                notified on your access to the account. The processing of such
                access information is subject to the privacy notice of the
                respective social media provider(s).
              </p>
              <p className="mb-3">
                Account holders are offered the option to enroll in our loyalty
                program. In case that you enroll, you will receive a personal
                account number. Upon your enrolment we will collect your profile
                information, your offline & online purchase history (in the
                store, based in your personal account number), the contents of
                your online wish list and the e-mail addresses of your friends
                if you would choose to provide us with those, for instance in
                connection with a tell a friend promotion. When you insert the
                e-mail address of a friend we will store that in your account.
              </p>
            </div>
          </div>
          <div className="text-[#3B2222] px-5 md:px-2">
            <h1 className={`${classes["sofia-font-block"]} text-[15px] mb-3`}>
              When you visit our website or use our app
            </h1>
            <div>
              <p className="mb-3">
                When you visit one of our websites or use our app we will drop
                cookies, pixels and other digital tools with similar
                functionality on your device that enable us to monitor your
                behaviour. These cookies channel back data to our data analytics
                tools. Depending on whether you are visiting our website or use
                the app, we can trace from which marketing channel you
                originated (e.g. Google AdWords, e-mail newsletter), what pages
                you viewed, which products you have added to your cart and which
                ones you bought. We also receive information on how you use and
                interact with the site as well as on the amount of time that you
                spend on it. The server of our website also collects basic
                information that relates to the request that is made from your
                browser when you visit the site. This data may include
                information on your last visit date and time, timestamp of the
                browser request, your IP address, basic HTTP header information
                (like referral URL and user agent) and previous URL that was
                requested by your browser. Our use of cookies, pixels and other
                digital tools with similar functionality, is described in more
                detail in our cookie notice which can be found here.
              </p>
            </div>
          </div>
          <div className="text-[#3B2222] px-5 md:px-2">
            <h1 className={`${classes["sofia-font-block"]} text-[15px] mb-3`}>
              When you visit a store
            </h1>
            <div>
              <p className="mb-3">
                In our store, depending on whether you are a consumer or a small
                business, we collect your company name, personal name, address
                and other relevant personal details if this is needed to comply
                by local fiscal and legal requirements. We may need this
                information to be able to provide you with a refund or a fiscal
                receipt (VAT receipt). This data is collected via our point of
                sale terminal in the store. In case you have enrolled in our
                loyalty program, we will link your in-store purchases to your
                account when you present us with your (Tim Hortons) loyalty
                program card details.
              </p>
              <p className="mb-3">
                If you have downloaded our app we may collect your GPS-data
                (only if you accept location services) or data that is collected
                based on your usage of the app (i.e. on the basis of your usage
                of the bar code scanning functionality of the app). The app may
                also have Beacon functionality (a beacon sends out signals to
                nearby smartphones, tablets and other devises, containing a
                small amount of data). In case you encounter a Beacon in one of
                our stores and have enabled location sharing and Bluetooth on
                your mobile device, the signal of the Beacon may trigger
                specific functionality in your app. The Beacon functionality
                that we currently use is providing you with push messages (e.g.
                a local voucher) or we may link the receipt of the Beacon signal
                by the app to link your visit to the store to your online
                activity.
              </p>
              <p className="mb-3">
                In our stores, we may conduct Wi-Fi tracking to monitor visits
                to our store and in store movement of customers. Wi-Fi tracking
                is also used to monitor window display conversion, e.g. the
                number of people that watch the window display of the store go
                into the store. Wi-Fi tracking makes use of the unique
                identifier of your device, such as a MAC address. Due to the
                fact that this kind of data is converted to an alternative
                format upon receipt, we cannot track you as a unique visitor. If
                we use Wi-Fi tracking in our store, this will be indicated with
                a logo in our store or on the window.
              </p>
              <p className="mb-3">
                When you use our in-store free Wi-Fi (in the stores that offer
                this option) we collect your MAC address as well as information
                on your browsing behavior. Free Wi-Fi is only available once
                your mobile device is registered as being present in our store.
              </p>
              <p className="mb-3">
                When you opt-in to receive our newsletter or promotional
                communications or click on a link in an e-mail
              </p>
              <p className="mb-3">
                We will collect your e-mail address and/or mobile number. In
                addition, we will retain a history of the e-mail and SMS
                messages that we sent to you and we will record what you do with
                these messages.
              </p>
              <p className="mb-3">
                When you actively communicate on us or our brands on social
                media
              </p>
              <p className="mb-3">
                If you actively communicate on us or our brands on social media,
                we collect a copy of your communication. In order to enable us
                to do so we contracted a third party for the provisioning of
                social listening services.
              </p>
            </div>
          </div>
          <div className="text-[#3B2222] px-5 md:px-2">
            <h1 className={`${classes["sofia-font-block"]} text-[15px] mb-3`}>
              Our Marketing Activites
            </h1>
            <div>
              <p>
                Based on your on- and offline purchase history and your
                behaviour on website and app, we will set-up and maintain your
                personal digital marketing profile. We can also try and infer
                data regarding you as a person by matching your data profile
                with customers that have a similar profile.
              </p>
              <p>
                We use your digital marketing profile and customer look-alike
                profile to target a similar audience of consumers to make sure
                that we only show you advertisements that will most likely suit
                your personal taste. This is called targeted advertising. The
                more successful we are in targeted advertising, the higher our
                (prospective) customer satisfaction.
              </p>
              <p>
                In order to support our targeted advertising we make use of a
                Data Management Platform, DMP. A DMP is a third party platform
                that processes data that is derived from your online behavior on
                our website, apps and the way you react to advertisement to come
                to insights that can help us create relevant targeted
                advertising. The platform links data that is derived from your
                online behavior on our website through an online identifier
                especially created for the purpose of supporting us for this
                purpose and to be as relevant as possible. The identifier
                enables us to individualise your behavior.
              </p>
              <p>
                Although the DMP profile exists in parallel to your personal
                digital marketing profile, we do export information from the DMP
                to your personal digital marketing profile and vice versa. We
                can furthermore complete and amplify your DMP profile with data
                from third party DMPs or by adding data from data vendors. For
                instance, data regarding the weather can be added to the DMP,
                helping us to show advertisements on items that are appropriate
                to your local weather. These second and third party data sources
                change regularly. If you would like to know what data sources we
                use in the DMP at any given point in time please send a request
                to the e-mail address indicated at the bottom of this privacy
                notice.
              </p>
              <p>
                Targeted advertising achieved by using your data as explained,
                may result in us showing specific (targeted) advertisements on
                Facebook, Google properties, online properties of so-called
                affiliate parties and other online locations. We may also use
                retargeting to show you a targeted advertisement on a
                third-party website that is linked to an event on our website or
                app, for example your failure to complete a specific purchase.
                Our advertisements may also lead to the addition of your
                personal data to advertising profiles that third parties
                maintain about you. Facebook, Google and other online actors can
                independently register your use of our advertisements.
              </p>
              <p>
                You can request us to remove your digital marketing profile by
                sending us an e-mail to the contact e-mail address that is
                displayed below. Please note that this is only possible if you
                have a personal account.
              </p>
            </div>
          </div>
          <div className="text-[#3B2222] px-5 md:px-2">
            <h1 className={`${classes["sofia-font-block"]} text-[15px] my-3`}>
              For which purposes do we process your personal data?
            </h1>
            <div>
              <p>
                Your personal data will be processed for the following purposes:
              </p>
              <p>
                a) To fulfil your orders, this includes answering your queries
                on the phone, via post, via e-mail or online via chat;
              </p>
              <p>
                b) To validate whether your personal data is not associated with
                fraudulent credit card usage or excessive credit card charge
                backs;
              </p>
              <p>
                c) To provide effective targeted advertising to you. Effective
                targeted advertising is advertising optimized to your (inferred)
                personal preferences. Targeted advertising includes both online
                advertisements and advertisements in direct marketing
                communications;
              </p>
              <p>
                d) If you have opted-in and thus agreed to receive these; send
                direct marketing messages to you and monitor your interaction
                with these messages;
              </p>
              <p>
                e) To further improve the functionality and the responsiveness
                of our chatbot(s);
              </p>
              <p>
                f) To perform social listening. Social listening is performed to
                enable us to have a general view of the opinion of people about
                us and our brands and to get an idea of relevant online
                influencers;
              </p>
              <p>g) To administer the membership of our loyalty program;</p>
              <p>
                h) To compose future item collections that meet your
                requirements and those of other customers;
              </p>
              <p>
                i) To fulfil our legal obligations, for example our financial
                bookkeeping obligations;
              </p>
              <p>
                j) To improve your user experience i.e. provide clear
                information, guidance to complete purchase etc.;
              </p>
              <p>
                k) To service personalized content (e.g. product, size
                recommendations) across Tim Hortons platforms
              </p>
              <p>
                l) To provide high level of service, so when you contact us we
                can support you with reference to your interactions with the
                shop;
              </p>
              <p>
                m) To enable the technical and functional management of our
                website and our app (including maintaining information
                security), for example by identifying parts of the websites that
                have a low latency;
              </p>
              <p className="mb-3">
                n) All of the above also applies to small businesses.
              </p>
            </div>
          </div>
          <div className="text-[#3B2222] px-5 md:px-2">
            <h1 className={`${classes["sofia-font-block"]} text-[15px] mb-3`}>
              What processing grounds do we utilize?
            </h1>
            <div>
              <p className="mb-3">
                The way we process data is based on four processing grounds: (i)
                the performance of the purchase agreement between you and us for
                one or more items, (ii) to perform one or more of our legal
                obligations, (iii) your consent and (iv) our legitimate
                interest. These processing grounds may be combined whenever
                appropriate. When we request your consent, you may withdraw it
                at any time. The legitimate interests that we pursue is our
                interest to sell more items to you and make sure that these
                items are to your liking. For instance, when we validate whether
                your personal data is not associated with fraudulent credit card
                use or excessive credit card charge backs, this is because we
                want to avoid delivering an item to you without receiving the
                purchase price in return. Also social listening is performed to
                enable us to have a general view of the opinion of people about
                us and our brands and to get an idea of relevant online
                influencers.
              </p>
              <p className="mb-3">
                If you fail to provide the obligatory data we request from you
                in the context of a purchase, the consequence of such failure is
                that the purchase cannot be completed.
              </p>
            </div>
          </div>
          <div className="text-[#3B2222] px-5 md:px-2">
            <h1 className={`${classes["sofia-font-block"]} text-[15px] my-3`}>
              Who has access to your personal data?
            </h1>
            <div>
              <p className="mb-3">
                Your personal data can be accessed by our employees to the
                extent that this access is required to enable them to perform
                their work for us. In addition, your personal data can be
                accessed by our external service providers, including our parent
                company Tim Hortons or AG Café International Management Ltd or
                Apparel FZCO provides us with IT services, hosting services,
                digital advertising services and other services we need to be
                able to run our business. All third parties that we work with,
                that have access to your personal date, are subject to data
                processing agreement(s) that guarantee(s) that this data is
                exclusively processed for the purposes listed above.
              </p>
              <p className="mb-3">
                If specifically required, by applicable law we may provide your
                personal data to regulatory authorities, police, justice
                department, fiscal authorities and other authorities assigned
                with investigative powers pursuant to applicable law.
              </p>
            </div>
          </div>
          <div className="text-[#3B2222] px-5 md:px-2">
            <h1 className={`${classes["sofia-font-block"]} text-[15px] mb-3`}>
              How long do we retain your personal data?
            </h1>
            <div>
              <p className="mb-3">
                We retain your personal data for the period that you actively
                interact with us. You are no longer considered to be actively
                interacting with us if, for a consecutive period of two (2)
                years, you have not purchased an item from us or have not
                visited one of our website(s) or used our app. After this two
                (2) year period we will only retain specific data that needs to
                be retained pursuant to a legal obligation of ours, e.g. records
                such as an invoice or a payment record.
              </p>
              <p className="mb-3">
                In case you’ve opted-in to receive direct marketing
                communications from us, the data that we need to send you these
                communications will continued to be used (processed) by us until
                you opt-out from receiving them.
              </p>
              <p className="mb-3">
                If you have an account, you can always request that we delete
                the account and its contents. You can do so by sending an e-mail
                to the e-mail address listed below.
              </p>
            </div>
          </div>
          <div className="text-[#3B2222] px-5 md:px-2">
            <h1 className={`${classes["sofia-font-block"]} text-[15px] my-3`}>
              Your rights
            </h1>
            <div>
              <p className="mb-3">
                You have the right to access your personal data that we collect
                and process and may request from us that we rectify or erase
                personal data or restrict the processing of your personal data
                or object to the processing. In addition, you have the statutory
                right to file a complaint with a competent data protection
                authority.
              </p>
              <p className="mb-3">
                You can exercise your rights towards us by sending an e-mail to
                the contact e-mail address listed below. We note that we will
                only oblige an exercise of rights by customers that have an
                (Club) account. For other non-registered customers, we are not
                able to verify your entitlement to the personal data to which
                your exercise of rights relates to.
              </p>
              <p>
                If you wish to opt-out from receiving direct marketing
                communications you can click the opt-out link in the respective
                message or indicate your opt-out in your account settings.
              </p>
            </div>
          </div>
          <div className="text-[#3B2222] px-5 md:px-2">
            <h1 className={`${classes["sofia-font-block"]} text-[15px] my-3`}>
              Our Contact details
            </h1>
            <div>
              <p>
                Any enquiries can be addressed to hotline: 800-TIMS (8467) or
                Email: support@timhortonsgcc.com
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PolicyPrivacy;
