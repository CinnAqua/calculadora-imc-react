import { useState } from 'react'
import { IMaskInput } from 'react-imask'
import styles from './Calculadora.module.css'

const Calculadora = () => {
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [resultado, setResultado] = useState('')

    const RenderizaImc = () => {
        const imc = (peso / (altura * altura)).toFixed(1)

        if (peso == 0 || altura == 0) {
            alert('Por favor insira peso e altura válidos')
        }
        else if (imc >= 40) {
            return setResultado(
                <p className="imc1">IMC:  {imc} <br/> Obesidade Grau 3</p>
            )
        } else if (imc >= 35) {
            return setResultado(
                <p className="imc2">IMC:  {imc} <br/> Obesidade Grau 2</p>
            )
        } else if (imc >= 30) {
            return setResultado(
                <p className="imc3">IMC:  {imc} <br/> Obesidade Grau 1</p>
            )
        } else if (imc >= 25) {
            return setResultado(
                <p className="imc4">IMC:  {imc} <br/> Acima do peso</p>
            )
        } else if (imc >= 18.5) {
            return setResultado(
                <p className="imc5">IMC:  {imc} <br/> Peso normal</p>
            )
        } else if (imc >= 17) {
            return setResultado(
                <p className="imc6">IMC:  {imc} <br/> Abaixo do peso</p>
            )
        } else {
            return setResultado(
                <p className="imc7">IMC:  {imc} <br/> Muito abaixo do peso</p>
            )
        }
    }

    return (
        <>
            <form>
                <IMaskInput placeholder='Peso' maxLength="3" required
                onChange={({target}) => setPeso(target.value)}  />
                <span>Kg</span>
                <IMaskInput placeholder='Altura' mask="0.00" required
                onChange={({target}) => setAltura(target.value)}  />
                <span>M</span> <br />
                <button onClick={RenderizaImc} type='button'>Calcular</button>
            </form>
            <div className={styles.resultado}>
                {resultado}
            </div>
        </>
    )
}

export default Calculadora
