import React, { useState, forwardRef, useImperativeHandle } from "react";
import {Modal, Form, Input, Button} from "antd";

const DashboardEdit:React.FC = forwardRef((props, ref) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [ form ] = Form.useForm();

    useImperativeHandle(ref,() => {
        const showModal = () => {
            setIsModalVisible(true);
        }
    });

    const hideModal = () => {
        setIsModalVisible(false);
    }
    return <Modal open={isModalVisible}>
        <Form form={form}>
            <Form.Item name="name" label="名称" rules={[{ required: true }]}>
                <Input ></Input>
            </Form.Item>
            <Form.Item name="description" label="描述">
                <Input.TextArea></Input.TextArea>
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    onClick={() => {
                        // 处理表单提交
                        form.submit();
                    }}
                >
                    确定
                </Button>
                <Button onClick={hideModal}>取消</Button>
            </Form.Item>
        </Form>
    </Modal>;
});

export default DashboardEdit;


