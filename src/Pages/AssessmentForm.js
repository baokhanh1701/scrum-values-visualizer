import React, { useContext } from "react";
import { Typography, Form, Button, Select, Anchor, Row, Col } from "antd";
import styled from "styled-components";
import { AuthContext } from "../Context/AuthProvider";
import { addDocument } from "../Firebase/services";
import { AppContext } from "../Context/AppProvider";
import FormItem from "antd/es/form/FormItem";
import SuccessModal from "../Components/SuccessModal";
const { Title, Text } = Typography;

const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
  `;

export default function AssessmentForm() {
    const { setOpenSuccessModal, scrumValues, scrumValuesState, setScrumValuesState } = useContext(AppContext);
    const { user } = useContext(AuthContext);
    const userToDb = JSON.parse(localStorage.getItem("data"));
    const onFinish = (values) => {
        setScrumValuesState(scrumValues);
        const newAssessment = {
            ...values,
            userToDb,
            scrumValuesState
        };
        localStorage.setItem('scrum-values-current-user', JSON.stringify(scrumValuesState));
        addDocument('assessment', newAssessment);
        localStorage.setItem('scrum-assessment', JSON.stringify(newAssessment));
        // add new assessment to db, linked to user
        console.log(scrumValuesState);
    };

    const onChangeCourage = (value) => {
        if (value === 1) {
            scrumValues.courage = scrumValues.courage + 1;
        } else if (value === 0) {
            if (scrumValues.courage > 0) {
                scrumValues.courage = scrumValues.courage - 1;
            }
        }
        console.log("After: ", scrumValues);
    }
    const onChangeCommitment = (value) => {
        if (value === 1) {
            scrumValues.commitment = scrumValues.commitment + 1;
        } else if (value === 0) {
            if (scrumValues.commitment > 0) {
                scrumValues.commitment = scrumValues.commitment - 1;
            }
        }
        console.log("After: ", scrumValues);
    }
    const onChangeFocus = (value) => {
        if (value === 1) {
            scrumValues.focus = scrumValues.focus + 1;
        } else if (value === 0) {
            if (scrumValues.focus > 0) {
                scrumValues.focus = scrumValues.focus - 1;
            }
        }
        console.log("After: ", scrumValues);
    }
    const onChangeOpenness = (value) => {
        if (value === 1) {
            scrumValues.openness = scrumValues.openness + 1;
        } else if (value === 0) {
            if (scrumValues.openness > 0) {
                scrumValues.openness = scrumValues.openness - 1;
            }
        }
        console.log("After: ", scrumValues);
    }
    const onChangeRespect = (value) => {
        if (value === 1) {
            scrumValues.respect = scrumValues.respect + 1;
        } else if (value === 0) {
            if (scrumValues.respect > 0) {
                scrumValues.respect = scrumValues.respect - 1;
            }
        }
        console.log("After: ", scrumValues);
    }

    return (
        <Row>
            <Col span={20}>
                <Form
                    name="assessment-form"
                    style={{
                        backgroundColor: "white",
                        padding: "1.5rem 2.5rem 6rem 2.5rem",
                        borderRadius: "24px",
                    }}
                    layout="horizontal"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    size="large"
                >
                    <Typography.Title style={{ marginTop: 0 }}>
                        Welcome to Assessment Form
                    </Typography.Title>
                    <DivStyled id="courage-form"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine"
                    >
                        <Title level={3}>Courage</Title>
                        <Form.Item
                            label={
                                <Text>1. I work on the next highest priority Product Backlog Item </Text>
                            }
                            name="courage-1"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex",
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeCourage}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>2. If I see something that is wrong with what I'm being asked to do, I will say so.  </Text>
                            }
                            name="courage-2"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeCourage}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>3. I will question & reproach my team members if I feel that they are doing something wrong.  </Text>
                            }
                            name="courage-3"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeCourage}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>4. Regardless of the person talking, I will correct them if I believe that they are incorrect.                        </Text>
                            }
                            name="courage-4"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeCourage}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>5. I will stand firm if I believe I am right, even if I'm in the minority within the group.  </Text>
                            }
                            name="courage-5"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeCourage}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>
                    </DivStyled>
                    <br />

                    <DivStyled id="commitment-form"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine"
                    >
                        <Title level={3}>Commitment</Title>
                        <Form.Item
                            label={
                                <Text>1. I always know what the sprint goal is and how my work supports it.  </Text>
                            }
                            name="commitment-1"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeCommitment}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>2. I do everything I can to ensure we achieve the goals of the sprint.
                                </Text>
                            }
                            name="commitment-2"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeCommitment}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>3. In my current team, I have never thought of taking a sick day to avoid going into work.
                                </Text>
                            }
                            name="commitment-3"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeCommitment}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>4. I always arrive on time for the events, my colleagues never have to wait for me to start the event.
                                </Text>
                            }
                            name="commitment-4"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeCommitment}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>5. I know what it means to say that an item is done, i.e. I know the criteria that meets our Definition of Done.
                                </Text>
                            }
                            name="commitment-5"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeCommitment}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>
                    </DivStyled>
                    <br />

                    <DivStyled id="focus-form"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine"
                    >
                        <Title level={3}>Focus</Title>
                        <Form.Item
                            label={
                                <Text>1. Whilst working on a story I do not get distracted.
                                </Text>
                            }
                            name="focus-1"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeFocus}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>2. If I am not enjoying the work in a story I still give it the attention it needs.
                                </Text>
                            }
                            name="focus-2"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeFocus}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>3. When enjoying working on a story I will not over work a story just to prolong it.
                                </Text>
                            }
                            name="focus-3"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeFocus}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>4. I do not procrastinate when working on a story.
                                </Text>
                            }
                            name="focus-4"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeFocus}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>5. ASA the story is ready to move into a new state, I'll tell my colleagues and either hand it over or ensure that they know it is ready to pick up.
                                </Text>
                            }
                            name="focus-5"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex",
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeFocus}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>
                    </DivStyled>
                    <br />

                    <DivStyled id="openness-form"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine">
                        <Title level={3}>Openness</Title>
                        <Form.Item
                            label={
                                <Text>1. I do not shy away from telling difficult news to team members and stakeholders.
                                </Text>
                            }
                            name="openness-1"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeOpenness}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>2. I do not hide away difficult issues in the hope that they will sort themselves out.
                                </Text>
                            }
                            name="openness-2"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeOpenness}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>3. If something / someone is annoying me I will address it / tell them.
                                </Text>
                            }
                            name="openness-3"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeOpenness}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>4. My colleagues can judge what state of mind I'm in, I can share my feelings with my them.
                                </Text>
                            }
                            name="openness-4"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeOpenness}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>5. I always say the true state of an item, and do not over/under play it.
                                </Text>
                            }
                            name="openness-5"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeOpenness}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>
                    </DivStyled>
                    <br />

                    <DivStyled id="respect-form"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine">
                        <Title level={3}>Respect</Title>
                        <Form.Item
                            label={
                                <Text>1. I listen with equal intensity regardless of who is talking.
                                </Text>
                            }
                            name="respect-1"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeRespect}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>2. When listening to people I never talk over them.
                                </Text>
                            }
                            name="respect-2"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeRespect}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>3. I value everyone's opinion equally.
                                </Text>
                            }
                            name="respect-3"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeRespect}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>4. I am never concerned who works on what item in the backlog.
                                </Text>
                            }
                            name="respect-4"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeRespect}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <Text>5. I feel that my opinion is respected and that I have an equal say in the team.
                                </Text>
                            }
                            name="respect-5"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your answer!",
                                },
                            ]}
                            style={{
                                display: "flex"
                            }}
                            initialValue={0}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={onChangeRespect}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Yes',
                                    },
                                    {
                                        value: 0,
                                        label: 'No',
                                    }
                                ]}
                            />
                        </Form.Item>
                    </DivStyled>
                    <br />

                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{
                                borderRadius: "50px",
                                padding: "24px",
                                display: "flex",
                                alignItems: "center",
                            }}
                            onClick={() => {
                                setOpenSuccessModal(true);
                                console.log(scrumValues);
                            }}
                        >
                            <Typography.Text
                                style={{
                                    color: "white",
                                    fontSize: "20px",
                                }}
                            >
                                Done
                            </Typography.Text>
                        </Button>
                    </FormItem>
                    <br />
                </Form>
            </Col>
            <Col span={4}>
                <Title level={5}>Form navigation</Title>
                <Anchor
                    items={[
                        {
                            key: 'courage',
                            href: '#courage-form',
                            title: 'Courage',
                        },
                        {
                            key: 'commitment',
                            href: '#commitment-form',
                            title: 'Commitment',
                        },
                        {
                            key: 'focus',
                            href: '#focus-form',
                            title: 'Focus',
                        },
                        {
                            key: 'openness',
                            href: '#openness-form',
                            title: 'Openness',
                        },
                        {
                            key: 'respect',
                            href: '#respect-form',
                            title: 'Respect',
                        },
                    ]}
                />
            </Col>

            <SuccessModal />
        </Row>

    )
}