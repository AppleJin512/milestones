import React from "react";
import { Box, Typography, styled, Container } from "@mui/material";
import useStyles from "../../styles/styles";
import {
  Title,
  SubTitle,
  TextContent,
  TextContentList,
  StyledLink,
} from "../styledText";

export default function Policy(props) {
  const classes = useStyles();
  return (
    <Container className={classes.generalContainer} maxWidth="xl">
      <Box mb={8} mt={8}>
        <Box width="100%" py={5} px={15}>
          <Title variant="h5" sx={{ marginTop: "10px", marginBottom: "70px" }}>
            PRIVACY POLICY
          </Title>
          <TextContent variant="subtitle2">
            Maintaining the security of your data is a priority at Milestone &
            Moments a Steeful, LLC company, we are committed to respecting your
            privacy rights and our policies and procedures have been updated to
            comply with the EU General Data Protection Regulations (2018).
          </TextContent>
          <TextContent variant="subtitle2">
            We pledge to handle your data fairly and legally at all times.
            Milestone & Moments a Steeful, LLC company is also dedicated to
            being transparent about what data we collect about you and how we
            use it. This policy applies when you visit our website, enter your
            personal information to create a personal account or into a contact
            form and submit the form. For Milestone & Moments Suppliers, this
            policy applies from the date on the relevant letter of agreement.
          </TextContent>
          <TextContent variant="subtitle2">
            All personal data is stored on our server which is accessible by
            staff at Milestone & Moments Ltd. In particular, we want you to know
            that Milestone & Moments is not in the business of selling, renting
            or trading email lists with other companies and businesses for
            marketing purposes.
          </TextContent>
          <TextContent variant="subtitle2">
            In summary, Milestone & Moments uses your information to:
          </TextContent>
          <Box
            sx={{
              "& ul": { margin: "0 0 25px 20px", listStyle: "none" },
              "& li": { marginBottom: "6px" },
            }}
          >
            <ul>
              <li>
                <TextContentList>
                  Complete your order, send confirmation and shipping updates,
                  respond to your requests and queries and send event reminders.
                </TextContentList>
              </li>
              <li>
                <TextContentList>
                  Better understand your requirement, allowing us to personalize
                  the content you see and improve your experience when you visit
                  the website
                </TextContentList>
              </li>
              <li>
                <TextContentList>
                  Evaluate our website’s performance and ensure that it works
                  properly
                </TextContentList>
              </li>
              <li>
                <TextContentList>
                  Send you direct marketing communications if you have
                  specifically opted in to receive them.
                </TextContentList>
              </li>
            </ul>
          </Box>
          <TextContent variant="subtitle2">
            Disclosures required by law. Your personal information will be
            disclosed where we are obliged by law to do so. We may also disclose
            your personal information where we are allowed by law to protect or
            enforce our rights or the rights of others and for the detection and
            prevention of crimes, such as fraud.
          </TextContent>
          <SubTitle variant="subtitle2">
            How We Protect and Maintain Your Data?
          </SubTitle>
          <TextContent variant="subtitle2">
            All of the computers used at Milestone & Moments are fully protected
            with the latest anti-virus software and are all password protected.
            We have firewalls in place to prevent unauthorized access to our
            systems.
          </TextContent>
          <TextContent variant="subtitle2">
            The data you provide to us is stored on our server, which is located
            in a secure server. We have systems in-place to block detected
            unauthorized access attempts.
          </TextContent>
          <SubTitle variant="subtitle2">Data Retention Period</SubTitle>
          <TextContent variant="subtitle2">
            If you have subscribed to our free reminder service or created a
            Milestone & Moments personal account, then your data will be held
            securely until such time as you have deleted your profile and all
            reminder events.
          </TextContent>
          <TextContent>
            If you have purchased an item via the Milestone & Moments site using
            a guest profile, then any personal data will be retained for a
            period of 12 months, after that time period it will be permanently
            deleted.
          </TextContent>
          <TextContent>
            For Milestone & Moments suppliers, personal and company data will be
            retained until the service agreement is terminated.
          </TextContent>
          <SubTitle>Access To Your Information and Correction</SubTitle>
          <TextContent>
            You have the right to request a copy of the information that we hold
            about you. If you would like a copy of some or all of your personal
            information, please email us at Contact@MilestonenMoments.com
          </TextContent>
          <TextContent>
            If you would like your personal data to not be held by Milestone &
            Moments, then you should notify Milestone & Moments immediately by
            sending an email to Contact@MilestonenMoments.com.
          </TextContent>
          <SubTitle>Network and Information Security</SubTitle>
          <TextContent>
            We use commercially reasonable efforts to protect your personal
            information and to use and disclose it only in the manner as
            described above.
          </TextContent>
          <TextContent>
            Your account information and access to our Service is accessible
            only through the use of an individual user ID and password. To
            protect the confidentiality of personal information, you must keep
            your password confidential and not disclose it to any other person.
            You are responsible for all uses of our Site and Service by any
            person using your account user ID and password. Please advise us
            immediately if you believe your account user ID and password have
            been misused.
          </TextContent>
          <SubTitle>Information</SubTitle>
          <TextContent>
            Information is collected from you when you register with us, or when
            you contribute to or use some of the advanced features on the site.
            In addition, we may collect your IP address and use COOKIES unless
            you configure your web browser not to accept them. If you have not
            registered your details to use the website your account information
            will not be available. You can visit www.allaboutcookies.org for
            more information.
          </TextContent>
          <SubTitle>Who we disclose it to</SubTitle>
          <TextContent>
            We will only pass on any information to third parties other than for
            the purpose of processing your order. In certain circumstances we
            may need to disclose information about you if you breach this
            privacy policy or if you breach the Terms and Conditions. In the
            event that we sell part or all of our business, customer information
            may be one of the business assets. If this happens, your information
            will be used in accordance with this policy.
          </TextContent>
          <SubTitle>Cookies in detail</SubTitle>
          <TextContent>
            We use a session cookie to remember your log in and to retain the
            products you add to your basket. More details on their use can be
            found here &nbsp;
            <StyledLink
              style={{ textDecoration: "none", color: "#0688e2" }}
              href="http://www.allaboutcookies.org/cookies/session-cookies-used-for.html"
            >
              http://www.allaboutcookies.org/cookies/session-cookies-used-for.html
            </StyledLink>
          </TextContent>
          <TextContent>
            Please note that by blocking any or all cookies you may not have
            access to certain features, content, or personalization available on
            our site.
          </TextContent>
          <TextContent>
            We use Google Analytics to assess how customers interact with our
            website so we can improve customer satisfaction and user experience.
            This is an important feature to help innovate and monitor the
            performance of our website. More details can be found here&nbsp;
            <StyledLink href="https://www.google.com/policies/privacy/">
              https://www.google.com/policies/privacy/
            </StyledLink>
          </TextContent>
          <TextContent>
            If you have any queries, please contact us at:
            Contact@milestonenmoments.com
          </TextContent>
        </Box>
      </Box>
    </Container>
  );
}
