import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe"
import NewsletterForm from "./newsletterForm"
const MAILCHIMP_URL = `${process.env.NEXT_PUBLIC_MAILCHIMP}`;

// use the render prop and your custom form
const Newsletter = () => (
  <MailchimpSubscribe
    url={MAILCHIMP_URL}
    render={({ subscribe, status, message }) => (
      <div>
        <NewsletterForm
        status={status}
        message={message}
        onValidated={(formData: EmailFormFields) => subscribe(formData)}
        />
      </div>
    )}
  />
)

export default Newsletter