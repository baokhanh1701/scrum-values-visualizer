import React from "react";
import {
  Button,
  Layout,
  theme,
  Typography,
  Card,
  FloatButton,
} from "antd";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
const { Header } = Layout;
const { Text, Title } = Typography;
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

export default function LandingPage() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div style={{
      overflowY: 'hidden'
    }}>
      <FloatButton.BackTop />
      <Layout className="layout">
        <Header style={{ backgroundColor: "#0A4D68", padding: "10px" }}>
          <div
            className="right"
            style={{
              margin: "0.7rem",
              marginRight: "1em",
            }}
          >
            <Button
              style={{
                borderRadius: "24px",
                marginRight: "16px",
                backgroundColor: "#05BFDB",
                borderColor: "#00FFCA",
                color: "white",
              }}
              size="large"
              href="/signin"
            >
              Sign in
            </Button>
            <Button
              style={{
                borderRadius: "24px",
                marginRight: "16px",
                backgroundColor: "#0A4D68",
                borderColor: "#00FFCA",
                color: "#05BFDB",
              }}
              size="large"
              href="/signup"
            >
              Sign up
            </Button>
          </div>
        </Header>
        <div
          className="site-layout-content"
          style={{
            backgroundColor: "#0A4D68",
            padding: "50px",
            paddingBottom: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignSelf: "center",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                padding: "8em",
              }}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="2000"
              data-aos-easing="ease-in-sine"
            >
              <Text
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                }}
              >
                Welcome to...
              </Text>
              <Title style={{ color: "white", marginTop: 0, fontSize: "5em" }}>
                {" "}
                Scrum Values Personal Visualizer
              </Title>
              <Text style={{ color: "white", fontSize: "1.5rem" }}>
                Welcome to Beehexa's Scrum Values Personal Visualizer, where you assess your and then team's Scrum Values and 
                receive an intuitive personalized Radar Chart by a set of comprehensive questions.
              </Text>
              <div
                style={{
                  margin: "20px",
                  marginTop: "40px"
                }}
              >
                <Button
                  style={{
                    borderRadius: "24px",
                    marginRight: "16px",
                    backgroundColor: "#05BFDB",
                    borderColor: "#00FFCA",
                    color: "white",
                  }}
                  size="large"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-sine"
                  href="/signup"
                >
                  Sign Up Now
                </Button>
                <Button
                  style={{
                    borderRadius: "24px",
                    marginRight: "16px",
                    backgroundColor: "#0A4D68",
                    borderColor: "#00FFCA",
                    color: "#05BFDB",
                  }}
                  size="large"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-sine"
                  href="#site-layout-content-2"
                >
                  Explore more
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------- */}
        <div
          className="site-layout-content-2"
          id="site-layout-content-2"
          style={{
            background: colorBgContainer,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <Card
            style={{
              width: 400,
              margin: 30,
              backgroundColor: "#0A4D68",
              borderRadius: "24px",
            }}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="500"
            data-aos-once="false"
            data-aos-easing="ease-in-sine"
          >
            <Title style={{ color: "white" }}>Personalization</Title>
            <Text
              style={{
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              You and Your Scrum Values, on a Radar Chart.
            </Text>
          </Card>
          <Card
            style={{
              width: 400,
              margin: 30,
              borderColor: "#00FFCA",
              borderRadius: "24px",
              borderWidth: "3px",
            }}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="750"
            data-aos-once="false"
            data-aos-easing="ease-in-sine"
          >
            <Title>Team Orientation</Title>
            <Text
              style={{
                fontSize: "1.5rem",
              }}
            >
              Scrum Values Orientation of your team can be viewed.
            </Text>
          </Card>
          <Card
            style={{
              width: 400,
              margin: 30,
              borderColor: "#00FFCA",
              borderRadius: "24px",
              borderWidth: "3px",
            }}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1000"
            data-aos-once="false"
            data-aos-easing="ease-in-sine"
          >
            <Title>Assessment</Title>
            <Text
              style={{
                fontSize: "1.5rem",
              }}
            >
              With our designed questions for better assessment.
            </Text>
          </Card>
        </div>
        {/* ----------------------------------- */}
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            display: "flex",
            flexWrap: "wrap",
            padding: "8em"
          }}
        >
          <div
            style={{
              padding: "5px",
              paddingRight: "20px",
              alignSelf: "center",
            }}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="2000"
            data-aos-easing="ease-in-sine"
          >
            <Title
              style={{
                fontSize: "3rem",
              }}
            >
              Personalized Scrum Chart
            </Title>
            <Text
              style={{
                fontSize: "1.25rem",
              }}
            >
              With this Visualizer, you can take our self-assessment quizzes and have your Scrum Values Radar Chart.{" "}
              <br />
            </Text>
          </div>
        </div>
        {/* ----------------------------------- */}
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            display: "flex",
            flexDirection: "row-reverse",
            flexWrap: "wrap",
            padding: "8em"
          }}
        >
          <div
            style={{
              flex: "33.3%",
              padding: "5px",
              textAlign: "left",
              paddingRight: "20px",
              alignSelf: "center",
            }}
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="2000"
            data-aos-easing="ease-in-sine"
          >
            <Title
              style={{
                fontSize: "3rem",
              }}
            >
              For your whole Team
            </Title>
            <Text
              style={{
                fontSize: "1.25rem",
              }}
            >
              We offer all-in-one Radar Chart for you to assess your team's Values orientation.
            </Text>
            <br />
            <br />
          </div>
        </div>
        {/* ----------------------------------- */}
        <div
          className="site-layout-content"
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#0A4D68",
            padding: "3rem",
            paddingTop: "10rem",
            paddingBottom: "10rem",
            alignItems: "center",
          }}
        >
          <div>
            <Title
              style={{
                color: "white",
                marginTop: 0,
                fontSize: "3rem",
              }}
            >
              {" "}
              Ready to Assess You and Your Team?
            </Title>
          </div>
          <div
            style={{
              marginTop: "20px",
              alignContent: "center",
            }}
          >
            <Button
              style={{
                borderRadius: "24px",
                marginRight: "16px",
                backgroundColor: "#05BFDB",
                borderColor: "#00FFCA",
                color: "white",
              }}
              size="large"
              href="/signup"
            >
              Sign Up Now
            </Button>
          </div>
        </div>
        {/* ----------------------------------- */}
      </Layout>
    </div>
  );
}
