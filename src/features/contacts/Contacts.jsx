import { Table, Input, Select, Button, Row, Col, Typography } from "antd";
import { ExportOutlined, PlusOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const data = [
  {
    key: "1",
    name: "Carlos Díaz",
    company: "Acme Inc.",
    funnelStage: "Negotiating",
    tags: [
      { title: "Enterprise", color: "#f0ad4e" },
      { title: "Q4-Target", color: "#d9534f" },
    ],
    lastContact: "2023-10-25",
  },
  {
    key: "2",
    name: "Maria Garcia",
    company: "TechSolutions",
    funnelStage: "Won",
    tags: [{ title: "Active Client", color: "#5bc0de" }],
    lastContact: "2023-10-22",
  },
  {
    key: "3",
    name: "Javier Rodriguez",
    company: "Innovate Co.",
    funnelStage: "Contacted",
    tags: [],
    lastContact: "2023-10-20",
  },
  {
    key: "4",
    name: "Sofia Lopez",
    company: "Globex Corp",
    funnelStage: "New",
    tags: [{ title: "High-Priority", color: "#d9534f" }],
    lastContact: "2023-10-19",
  },
];

const columns = [
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "COMPANY",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "FUNNEL STAGE",
    dataIndex: "funnelStage",
    key: "funnelStage",
  },
  {
    title: "TAGS",
    dataIndex: "tags",
    key: "tags",
    render: (tags) => (
      <>
        {tags.map((tag, index) => (
          <span
            key={index}
            style={{
              marginRight: 5,
              backgroundColor: tag.color,
              padding: "2px 5px",
              borderRadius: "3px",
              color: "#fff",
            }}
          >
            {tag.title}
          </span>
        ))}
      </>
    ),
  },
  {
    title: "LAST CONTACT",
    dataIndex: "lastContact",
    key: "lastContact",
  },
];

const { Option } = Select;

const { Title, Text } = Typography;

export const Contacts = () => {
  const { t } = useTranslation("contacts");

  return (
    <>
      <Row justify="space-between" align="middle" style={{ padding: "20px 0" }}>
        <Col>
          <Title level={2} style={{ margin: 0 }}>
            {t("contacts")}
          </Title>
          <Text type="secondary">{t("contacts_description")}</Text>
        </Col>
        <Col>
          <Button icon={<ExportOutlined />} style={{ marginRight: 10 }}>
            {t("export")}
          </Button>
          <Button type="primary" icon={<PlusOutlined />}>
            {t("add_contact")}
          </Button>
        </Col>
      </Row>
      <Row justify="space-between" align="middle" className="mb-6">
        <Col style={{ display: "flex", justifyContent: "space-between", gap: 15 }}>
          <Input placeholder={t("search_placeholder")} allowClear style={{ width: "100%" }} />
          <Select defaultValue={t("funnel_stage")} style={{ width: 120 }}>
            <Option value="funnelStage1">{t("funnel_stage_option_1")}</Option>
            <Option value="funnelStage2">{t("funnel_stage_option_2")}</Option>
            <Option value="funnelStage3">{t("funnel_stage_option_3")}</Option>
          </Select>

          <Select defaultValue={t("tags")} style={{ width: 120 }}>
            <Option value="tag1">{t("tag_option_1")}</Option>
            <Option value="tag2">{t("tag_option_2")}</Option>
            <Option value="tag3">{t("tag_option_3")}</Option>
          </Select>

          <Select defaultValue={t("source")} style={{ width: 120 }}>
            <Option value="source1">{t("source_option_1")}</Option>
            <Option value="source2">{t("source_option_2")}</Option>
            <Option value="source3">{t("source_option_3")}</Option>
          </Select>
        </Col>

        <Col>
          <Button type="primary">{t("save_view")}</Button>
        </Col>
      </Row>
      <Table
        columns={columns.map((col) => ({
          ...col,
          title: t(col.title.toLowerCase().replace(" ", "_")),
        }))}
        dataSource={data}
        pagination={{
          total: 100,
          showSizeChanger: false,
        }}
        showHeader={true}
      />
    </>
  );
};
