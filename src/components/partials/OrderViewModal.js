import React, { useState, useEffect } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useGetOrderPdfMutation } from '../../redux/orderApi';

function OrderViewModal(props) {
    const [getOrderPdf] = useGetOrderPdfMutation()
    const [products, setProducts] = useState([])
    const handleClose = () => {
        props.setShowOrder(false);
    };

    useEffect(() => {
        if (props?.currentRecord.product_items) {
            setProducts(JSON.parse(props?.currentRecord?.product_items))
        }
    }, [props])

    const generatePdf = async () => {
        const data = { id: props.currentRecord.id }
        const response = await getOrderPdf(data)
        const pdfUrl = response.data?.pdf;
        fetch(pdfUrl)
            .then(response => response.blob())
            .then(blob => {
                // Create a temporary link element
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "invoice.pdf"; // specify the filename
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error("Error downloading PDF:", error);
            });
    }

    return (
        <div>
            <Modal show={props.showOrder} onHide={handleClose} dialogClassName="modal-lg">
                <Modal.Header closeButton>
                    {" "}
                    <Modal.Title style={{ color: "black" }}>
                        Order View
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className='d-flex justify-content-between'>
                            <p><b>First Name : </b>{props?.currentRecord?.first_name}</p>
                            <p><b>Last Name : </b>{props?.currentRecord?.last_name}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p><b>Email : </b>{props?.currentRecord?.email}</p>
                            <p><b>Address : </b>{props?.currentRecord?.address}</p>
                        </div>
                    </div>
                    <hr />

                    <div class="table-responsive">


                        <div className='product-item'>
                            <table class="table ref14">

                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Quantity</th>
                                        <th>Rate</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products?.map((list) => {
                                        let discount = list?.save > 0 ? (list.price) - ((list.price * list.save) / 100) : list.price
                                        return (
                                            <tr>

                                                <td><img className='popop_pro_img' src={list?.images} alt='' /></td>


                                                <td> <h6>{list.title}</h6>
                                                    <p>{list.finishing} / {list.size}</p></td>
                                                <td>{list.quantity}</td>
                                                <td><span className='me-3'>${discount}</span>{list?.save > 0 ? <del>${list?.price}</del> : ""}</td>
                                                <td>${discount * list.quantity}</td>
                                            </tr>

                                        )
                                    })}
                                </tbody>
                            </table>

                        </div>

                    </div>


                    <div className='total'>
                        <div>
                            <p>Subtotal</p>
                            <p>${props?.currentRecord?.total}</p>
                        </div>
                        <hr />
                        <div>
                            <p>Grand Total</p>
                            <p>${props?.currentRecord?.grand_total}</p>
                        </div>

                    </div>
                    {props.currentRecord?.gift_note ? <div>
                        <h5>Gift Note</h5>
                        <p>{props.currentRecord?.gift_note}</p>
                    </div> : ""}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={generatePdf}>
                        Generate Invoice
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default OrderViewModal
