import { AppFooter } from "../components/AppFooter";

import { ContactForm } from "../components/ContactForm";

export function Contact() {
    return (
        <div className="flex flex-col h-screen">
            {/* <AppNav /> */}
            <ContactForm />
            <AppFooter />
        </div>
    )
}