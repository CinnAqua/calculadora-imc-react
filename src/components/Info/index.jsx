import styles from './Info.module.css'

const Info = () => {
    return (
        <>
            <table className={styles.table}>
                <tbody>
                    <tr className='imc1'>
                        <td>40 ou mais</td>
                        <td>Obesidade Grau 3</td>
                    </tr>
                    <tr className='imc2'>
                        <td>Entre 35 e 39.9</td>
                        <td>Obesidade Grau 2</td>
                    </tr>
                    <tr className='imc3'>
                        <td>Entre 30 e 34.9</td>
                        <td>Obesidade Grau 1</td>
                    </tr>
                    <tr className='imc4'>
                        <td>Entre 25 e 29.9</td>
                        <td>Acima do peso</td>
                    </tr>
                    <tr className='imc5'>
                        <td>Entre 18 e 24.9</td>
                        <td>Peso normal</td>
                    </tr>
                    <tr className='imc6'>
                        <td>Entre 17 e 18.4</td>
                        <td>Abaixo do peso</td>
                    </tr>
                    <tr className='imc7'>
                        <td>Menos que 17</td>
                        <td>Muito abaixo do peso</td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.text}>
                <h2>O que é IMC?</h2>
                <p>
                    Seu IMC (Índice de Massa Corporal) é o seu peso dividido por sua altura ao quadrado (multiplicada por si mesma).
                    Um IMC alto ou baixo demais pode ser um sinal de problemas de saúde. Cheque a tabela ao lado:
                </p>
                <h2>Os riscos da obesidade</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit reiciendis natus ipsum officiis vel numquam, nulla totam illo molestias at. Repellendus ullam qui reiciendis fugit. Maiores adipisci exercitationem eos sit.
                </p>
            </div>
        </>
    )
}

export default Info