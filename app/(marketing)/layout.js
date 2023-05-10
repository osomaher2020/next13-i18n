import { Col, ListGroup, Row } from "react-bootstrap";

export default function MarktingLayout({ children }) {
    return (
        <Row>
            <Col md={4}>
                <ListGroup>
                    <ListGroup.Item>Item 1</ListGroup.Item>
                    <ListGroup.Item>Item 2</ListGroup.Item>
                    <ListGroup.Item>Item 3</ListGroup.Item>
                    <ListGroup.Item>Item 4</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col auto>
                {children}
            </Col>
        </Row>
    )
}