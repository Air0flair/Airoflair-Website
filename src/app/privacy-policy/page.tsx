import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black" />

      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 sm:px-6 lg:px-8 py-10">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <div className="relative h-10 w-40">
            <Image
              src={Logo}
              alt="Airoflair Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Back link with dark-mode SVG arrow */}
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L8 12L15 19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="8"
                y1="12"
                x2="20"
                y2="12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Back</span>
          </Link>
        </div>

        {/* Page Heading */}
        <main className="mt-10 mb-12 flex-1">
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Last updated: 03 September 2023
          </p>

          {/* Body Content */}
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-200">
            <p className="text-zinc-300">
              This Privacy Policy explains how Airoflair collects, stores, and
              uses personal information when you use our website, Inspect
              platform, Quick Inspect App, Airoflair Data App, or related tools.
            </p>

            <p>
              By accessing or using our services, you agree to this Privacy
              Policy and consent to the data practices described.
            </p>

            <p className="text-xs text-zinc-500">
              <strong>Note:</strong> Privacy policy
              <br />
              <br />
              We respect your privacy and are committed to protecting it through
              our compliance with this privacy policy (“Policy”). This Policy
              describes the types of information we may collect from you or that
              you may provide (“Personal Information”) on the airoflair.com
              website (“Website”), “inspect” mobile application (“Mobile
              Application”), and any of their related products and services
              (collectively, “Services”), and our practices for collecting,
              using, maintaining, protecting, and disclosing that Personal
              Information. It also describes the choices available to you
              regarding our use of your Personal Information and how you can
              access and update it. This Policy is a legally binding agreement
              between you (“User”, “you” or “your”) and AIROFLAIR (PTY) LTD
              (“AIROFLAIR (PTY) LTD”, “we”, “us” or “our”). If you are entering
              into this agreement on behalf of a business or other legal entity,
              you represent that you have the authority to bind such entity to
              this agreement, in which case the terms “User”, “you” or “your”
              shall refer to such entity. If you do not have such authority, or
              if you do not agree with the terms of this agreement, you must not
              accept this agreement and may not access and use the Services. By
              accessing and using the Services, you acknowledge that you have
              read, understood, and agree to be bound by the terms of this
              Policy. This Policy does not apply to the practices of companies
              that we do not own or control, or to individuals that we do not
              employ or manage.
              <br />
              <br />
              <strong>Automatic collection of information</strong>
              <br />
              When you open the Website or use the Mobile Application, our
              servers automatically record information that your browser or
              device sends. This data may include information such as your
              device’s IP address and location, browser and device name and
              version, operating system type and version, language preferences.
              <br />
              <br />
              <strong>Collection of personal information</strong>
              <br />
              You can’t access and use the Services without telling us who you
              are or revealing any information by which someone could identify
              you as a specific, identifiable individual. You will be asked to
              provide certain Personal Information (for example, your name and
              e-mail address). We receive and store any information you knowingly
              provide to us when you create an account on the Services. When
              required, this information may include the following:
              <br />
              • Contact information (such as email address, phone number, etc)
              <br />
              • Account details (such as user name, unique user ID, password,
              etc)
              <br />
              • Basic personal information (such as name, country of residence,
              etc)
              <br />
              • Geolocation data of your device (such as latitude and longitude)
              <br />
              • Certain features on the mobile device (such as gallery, etc)
              <br />
              You can choose not to provide us with your Personal Information,
              but then you may not be able to take advantage of most of the
              features on the Services. Users who are uncertain about what
              information is mandatory are welcome to contact us.
              <br />
              <br />
              <strong>Privacy of children</strong>
              <br />
              We do not knowingly collect any Personal Information from children
              under the age of 13. If you are under the age of 13, please do not
              submit any Personal Information through the Services. If you have
              reason to believe that a child under the age of 13 has provided
              Personal Information to us through the Services, please contact us
              to request that we delete that child’s Personal Information from
              our Services. We encourage parents and legal guardians to monitor
              their children’s Internet usage and to help enforce this Policy by
              instructing their children never to provide Personal Information
              through the Services without their permission. We also ask that
              all parents and legal guardians overseeing the care of children
              take the necessary precautions to ensure that their children are
              instructed to never give out Personal Information when online
              without their permission.
              <br />
              <br />
              <strong>Use and processing of collected information</strong>
              <br />
              We act as a data controller and a data processor in terms of the
              GDPR and POPI when handling Personal Information, unless we have
              entered into a data processing agreement with you in which case
              you would be the data controller and we would be the data
              processor. Our role may also differ depending on the specific
              situation involving Personal Information. We act in the capacity
              of a data controller when we ask you to submit your Personal
              Information that is necessary to ensure your access and use of the
              Services. In such instances, we are a data controller because we
              determine the purposes and means of the processing of Personal
              Information and we comply with data controllers’ obligations set
              forth in the GDPR and POPI.
              <br />
              We act in the capacity of a data processor in situations when you
              submit Personal Information through the Services. We do not own,
              control, or make decisions about the submitted Personal
              Information, and such Personal Information is processed only in
              accordance with your instructions. In such instances, the User
              providing Personal Information acts as a data controller in terms
              of the GDPR and POPI. In order to make the Services available to
              you, or to meet a legal obligation, we may need to collect and use
              certain Personal Information. If you do not provide the
              information that we request, we may not be able to provide you
              with the requested products or services. Any of the information we
              collect from you may be used for the following purposes:
              <br />
              • Create and manage user accounts
              <br />
              • Improve products and services
              <br />
              • Send administrative information
              <br />
              • Send marketing and promotional communications
              <br />
              • Send product and service updates
              <br />
              • Respond to inquiries and offer support
              <br />
              • Request user feedback
              <br />
              • Improve user experience
              <br />
              • Protect from abuse and malicious users
              <br />
              • Respond to legal requests and prevent harm
              <br />
              • Run and operate the Services
              <br />
              Processing your Personal Information depends on how you interact
              with the Services, where you are located in the world and if one
              of the following applies: (i) you have given your consent for one
              or more specific purposes; this, however, does not apply, whenever
              the processing of Personal Information is subject to, European
              data protection law and South Africa Protection of Personal
              Information; (ii) provision of information is necessary for the
              performance of an agreement with you and/or for any
              pre-contractual obligations thereof; (iii) processing is necessary
              for compliance with a legal obligation to which you are subject;
              (iv) processing is related to a task that is carried out in the
              public interest or in the exercise of official authority vested in
              us; (v) processing is necessary for the purposes of the legitimate
              interests pursued by us or by a third party.
              <br />
              We rely on the following legal bases as defined in the GDPR and
              POPI upon which we collect and process your Personal Information:
              <br />
              • User’s consent
              <br />
              • Compliance with the law and legal obligations
              <br />
              Note that under some legislations we may be allowed to process
              information until you object to such processing by opting out,
              without having to rely on consent or any other of the legal bases
              above. In any case, we will be happy to clarify the specific legal
              basis that applies to the processing, and in particular whether
              the provision of Personal Information is a statutory or
              contractual requirement, or a requirement necessary to enter into
              a contract.
              <br />
              <br />
              <strong>Payment processing</strong>
              <br />
              The Services requires payment processing, you will need to provide
              your credit card details or other payment account information,
              which will be used solely for processing payments. We use
              third-party payment processors (“Payment Processors”) to assist us
              in processing your payment information securely.
              <br />
              Payment Processors adhere to the latest security standards as
              managed by the PCI Security Standards Council, which is a joint
              effort of brands like Visa, MasterCard, American Express and
              Discover. Sensitive and private data exchange happens over a SSL
              secured communication channel and is encrypted and protected with
              digital signatures, and the Services are also in compliance with
              strict vulnerability standards in order to create as secure of an
              environment as possible for Users. We will share payment data with
              the Payment Processors only to the extent necessary for the
              purposes of processing your payments, refunding such payments, and
              dealing with complaints and queries related to such payments and
              refunds.
              <br />
              Please note that the Payment Processors may collect some Personal
              Information from you, which allows them to process your payments
              (e.g., your email address, address, credit card details, and bank
              account number) and handle all the steps in the payment process
              through their systems, including data collection and data
              processing. The Payment Processors’ use of your Personal
              Information is governed by their respective privacy policies which
              may or may not contain privacy protections as protective as this
              Policy. We suggest that you review their respective privacy
              policies.
              <br />
              <br />
              <strong>Managing information</strong>
              <br />
              If you would like to delete your Personal Information or
              permanently delete your account, you can do so on the Organisation
              page of your account on the Service.
              <br />
              <br />
              <strong>Disclosure of information</strong>
              <br />
              Depending on the requested Services or as necessary to complete
              any transaction or provide any Service you have requested, we may
              share your information with our trusted subsidiaries and joint
              venture partners, affiliates, contracted companies, and service
              providers (collectively, “Service Providers”) we rely upon to
              assist in the operation of the Services available to you and whose
              privacy policies are consistent with ours or who agree to abide by
              our policies with respect to Personal Information. We will not
              share any personally identifiable information with third parties
              and will not share any information with unaffiliated third
              parties.
              <br />
              Service Providers are not authorised to use or disclose your
              information except as necessary to perform services on our behalf
              or comply with legal requirements. Service Providers are given the
              information they need only in order to perform their designated
              functions, and we do not authorise them to use or disclose any of
              the provided information for their own marketing or other
              purposes.
              <br />
              We may also disclose any Personal Information we collect, use or
              receive if required or permitted by law, such as to comply with a
              subpoena or similar legal process, and when we believe in good
              faith that disclosure is necessary to protect our rights, protect
              your safety or the safety of others, investigate fraud, or respond
              to a government request.
              <br />
              In the event we go through a business transition, such as a merger
              or acquisition by another company, or sale of all or a portion of
              its assets, your user account, and your Personal Information will
              likely be among the assets transferred.
              <br />
              <br />
              <strong>Retention of information</strong>
              <br />
              We will retain and use your Personal Information for the period
              necessary to comply with our legal obligations, as long as your
              user account remains active, to enforce our agreements, resolve
              disputes, and unless a longer retention period is required or
              permitted by law.
              <br />
              We may use any aggregated data derived from or incorporating your
              Personal Information after you update or delete it, but not in a
              manner that would identify you personally. Once the retention
              period expires, Personal Information shall be deleted. Therefore,
              the right to access, the right to erasure, the right to
              rectification, and the right to data portability cannot be
              enforced after the expiration of the retention period.
              <br />
              <br />
              <strong>Transfer of information</strong>
              <br />
              Depending on your location, data transfers may involve transferring
              and storing your information in a country other than your own. The
              transfer of your Personal Information to countries outside the
              European Union will be made only if you have explicitly consented
              to it or in the cases provided for by the GDPR and will be
              processed in your interest.
              <br />
              You are entitled to learn about the legal basis of information
              transfers to a country outside the European Union or to any
              international organization governed by public international law or
              set up by two or more countries, such as the UN, and about the
              security measures taken by us to safeguard your information. If
              any such transfer takes place, you can find out more by checking
              the relevant sections of this Policy or inquire with us using the
              information provided in the contact section.
              <br />
              <br />
              <strong>Data protection rights under the GDPR and POPI</strong>
              <br />
              If you are a resident of the European Economic Area (“EEA”) or
              South Africa. You have certain data protection rights and we aim
              to take reasonable steps to allow you to correct, amend, delete,
              or limit the use of your Personal Information. If you wish to be
              informed what Personal Information we hold about you and if you
              want it to be removed from our systems, please contact us. In
              certain circumstances, you have the following data protection
              rights:
              <br />
              (i) You have the right to withdraw consent where you have
              previously given your consent to the processing of your Personal
              Information. To the extent that the legal basis for our processing
              of your Personal Information is consent, you have the right to
              withdraw that consent at any time. Withdrawal will not affect the
              lawfulness of processing before the withdrawal.
              <br />
              (ii) You have the right to learn if your Personal Information is
              being processed by us, obtain disclosure regarding certain aspects
              of the processing, and obtain a copy of your Personal Information
              undergoing processing.
              <br />
              (iii) You have the right to verify the accuracy of your
              information and ask for it to be updated or corrected. You also
              have the right to request us to complete the Personal Information
              you believe is incomplete.
              <br />
              (iv) You have the right to object to the processing of your
              information if the processing is carried out on a legal basis
              other than consent. Where Personal Information is processed for
              the public interest, in the exercise of an official authority
              vested in us, or for the purposes of the legitimate interests
              pursued by us, you may object to such processing by providing a
              ground related to your particular situation to justify the
              objection.
              <br />
              (v) You have the right, under certain circumstances, to restrict
              the processing of your Personal Information. These circumstances
              include: the accuracy of your Personal Information is contested by
              you and we must verify its accuracy; the processing is unlawful,
              but you oppose the erasure of your Personal Information and
              request the restriction of its use instead; we no longer need your
              Personal Information for the purposes of processing, but you
              require it to establish, exercise or defend your legal claims; you
              have objected to processing pending the verification of whether
              our legitimate grounds override your legitimate grounds. Where
              processing has been restricted, such Personal Information will be
              marked accordingly and, with the exception of storage, will be
              processed only with your consent or for the establishment, to
              exercise or defence of legal claims, for the protection of the
              rights of another natural, or legal person or for reasons of
              important public interest.
              <br />
              (vi) You have the right, under certain circumstances, to obtain the
              erasure of your Personal Information from us. These circumstances
              include: the Personal Information is no longer necessary in
              relation to the purposes for which it was collected or otherwise
              processed; you withdraw consent to consent-based processing; you
              object to the processing under certain rules of applicable data
              protection law; the processing is for direct marketing purposes;
              and the personal data have been unlawfully processed. However,
              there are exclusions of the right to erasure such as where
              processing is necessary: for exercising the right of freedom of
              expression and information; for compliance with a legal
              obligation; or for the establishment, to exercise or defence of
              legal claims.
              <br />
              (vii) You have the right to receive your Personal Information that
              you have provided to us in a structured, commonly used, and
              machine-readable format and, if technically feasible, to have it
              transmitted to another controller without any hindrance from us,
              provided that such transmission does not adversely affect the
              rights and freedoms of others.
              <br />
              (viii) You have the right to complain to a data protection
              authority about our collection and use of your Personal
              Information. If you are not satisfied with the outcome of your
              complaint directly with us, you have the right to lodge a
              complaint with your local data protection authority. For more
              information, please contact your local data protection authority in
              the EEA. This provision is applicable provided that your Personal
              Information is processed by automated means and that the
              processing is based on your consent, on a contract which you are
              part of, or on pre-contractual obligations thereof.
              <br />
              <br />
              <strong>How to exercise your rights</strong>
              <br />
              Any requests to exercise your rights can be directed to us through
              the contact details provided in this document. Please note that we
              may ask you to verify your identity before responding to such
              requests. Your request must provide sufficient information that
              allows us to verify that you are the person you are claiming to be
              or that you are the authorised representative of such person. If
              we receive your request from an authorised representative, we may
              request evidence that you have provided such an authorised
              representative with power of attorney or that the authorised
              representative otherwise has valid written authority to submit
              requests on your behalf.
              <br />
              You must include sufficient details to allow us to properly
              understand the request and respond to it. We cannot respond to
              your request or provide you with Personal Information unless we
              first verify your identity or authority to make such a request and
              confirm that the Personal Information relates to you.
              <br />
              <br />
              <strong>Cookies and data analytics</strong>
              <br />
              Our Services do not use third-party analytics tools that use
              cookies, web beacons, or other similar information-gathering
              technologies to collect standard internet activity and usage
              information.
              <br />
              We do not use third-party analytics tools to track or to collect
              any personally identifiable information of our Users.
              <br />
              <br />
              <strong>Email marketing</strong>
              <br />
              We collect your information when subscribing to the service and
              offer an electronic newsletter. We are committed to keeping your
              e-mail address confidential and will not disclose your email
              address to any third parties except as allowed in the information
              use and processing section or for the purposes of utilizing a
              third-party provider to send such emails. We will maintain the
              information sent via e-mail in accordance with applicable laws and
              regulations.
              <br />
              In compliance with the CAN-SPAM Act, all e-mails sent from us will
              clearly state who the e-mail is from and provide clear information
              on how to contact the sender. You may choose to stop receiving our
              newsletter or marketing emails by following the unsubscribe
              instructions included in these emails or by contacting us.
              However, you will continue to receive essential transactional
              emails.
              <br />
              <br />
              <strong>Push notifications</strong>
              <br />
              We offer push notifications. To make sure push notifications reach
              the correct devices, we use a third-party push notifications
              provider who relies on a device token unique to your device which
              is issued by the operating system of your device. While it is
              possible to access a list of device tokens, they will not reveal
              your identity, your unique device ID, or your contact information
              to us or our third-party push notifications provider. We will
              maintain the information sent via e-mail in accordance with
              applicable laws and regulations. If, at any time, you wish to stop
              receiving push notifications, simply adjust your device settings
              accordingly.
              <br />
              <br />
              <strong>Affiliate links</strong>
              <br />
              We do not engage in affiliate marketing on the Service nor have
              affiliate links present.
              <br />
              <br />
              <strong>Links to other resources</strong>
              <br />
              We do not have links to other resources that are not owned or
              controlled by us.
              <br />
              <br />
              <strong>Information security</strong>
              <br />
              We secure information you provide on computer servers in a
              controlled, secure environment, protected from unauthorized
              access, use, or disclosure. We maintain reasonable administrative,
              technical, and physical safeguards in an effort to protect against
              unauthorized access, use, modification, and disclosure of Personal
              Information in our control and custody. However, no data
              transmission over the Internet or wireless network can be
              guaranteed.
              <br />
              Therefore, while we strive to protect your Personal Information,
              you acknowledge that (i) there are security and privacy
              limitations of the Internet which are beyond our control; (ii) the
              security, integrity, and privacy of any and all information and
              data exchanged between you and the Services cannot be guaranteed;
              and (iii) any such information and data may be viewed or tampered
              with in transit by a third party, despite best efforts.
              <br />
              As the security of Personal Information depends in part on the
              security of the device you use to communicate with us and the
              security you use to protect your credentials, please take
              appropriate measures to protect this information.
              <br />
              <br />
              <strong>Data breach</strong>
              <br />
              In the event we become aware that the security of the Services has
              been compromised or Users’ Personal Information has been disclosed
              to unrelated third parties as a result of external activity,
              including, but not limited to, security attacks or fraud, we
              reserve the right to take reasonably appropriate measures,
              including, but not limited to, investigation and reporting, as
              well as notification to and cooperation with law enforcement
              authorities. In the event of a data breach, we will make
              reasonable efforts to notify affected individuals if we believe
              that there is a reasonable risk of harm to the User as a result of
              the breach or if notice is otherwise required by law. When we do,
              we will send you an email.
              <br />
              <br />
              <strong>Changes and amendments</strong>
              <br />
              We reserve the right to modify this Policy or its terms related to
              the Services at any time at our discretion. When we do, we will
              send you an email to notify you. We may also provide notice to you
              in other ways at our discretion, such as through the contact
              information you have provided. An updated version of this Policy
              will be effective immediately upon the posting of the revised
              Policy unless otherwise specified. Your continued use of the
              Services after the effective date of the revised Policy (or such
              other act specified at that time) will constitute your consent to
              those changes. However, we will not, without your consent, use
              your Personal Information in a manner materially different than
              what was stated at the time your Personal Information was
              collected.
              <br />
              <br />
              <strong>Acceptance of this policy</strong>
              <br />
              You acknowledge that you have read this Policy and agree to all
              its terms of services. By accessing and using the Services and
              submitting your information you agree to be bound by this Policy.
              If you do not agree to abide by the terms of this Policy, you are
              not authorised to access or use the Services.
              <br />
              <br />
              <strong>Contacting us</strong>
              <br />
              If you have any other questions, concerns, or complaints regarding
              this Policy or information we may hold about you, we encourage you
              to contact us using the details below:
              <br />
              enquiries@airoflair.com
              <br />
              We will attempt to resolve complaints and disputes and make every
              reasonable effort to honour your wish to exercise your rights as
              quickly as possible and in any event, within the timescales
              provided by applicable data protection laws.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
