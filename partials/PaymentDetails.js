import styles from '../styles/Footer.module.scss'

import Image from 'next/image'

const PaymentDetails = ({ paymentList }) => {
    const paymentInfo = paymentList.map((payments, i) => {
        return (
            <div className={styles.paymentIMGContainer} key={i}>
                {payments ? (
                    <Image src={payments.icon} alt={payments.title} className={styles.paymentIMG} height={48} width={48} layout='responsive' quality={100} objectFit="contain" />
                ) : null}
            </div>
        )
    })

    return (
        <>
            {paymentInfo}
        </>
    )
}

export default PaymentDetails