import Input from "./Components/Input";
import Button from "./Components/Button";
import { Container, Context, Row } from "./Styles";
import { useState } from "react";

const App = () => {
  //armazenar o número que está sendo digitado atualmente
  const [currentNumber, setCurrentNumber] = useState("");

  //armazenar o número digitado anteriormente (usado nas operações)
  const [previousNumber, setPreviousNumber] = useState("");
  //armazenar o operador selecionado (ex: +, -, x, ÷, %)
  const [operator, setOperator] = useState(null);

  //armazenar a expressão completa (ex.: "5 + 3 =")
  const [expression, setExpression] = useState("");

  //limpar a calculadora (resetar os estados)
  const handleOnClear = () => {
    setCurrentNumber("");
    setExpression("");
    setOperator(null);
  };

  //remover o último caractere do número atual (backspace)
  const handleBackspace = () => {
    setCurrentNumber((prev) => prev.slice(0, -1));
  };

  //adicionar um dígito (ou ponto, ou vírgula) ao número atual
  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev}${number}`);
  };

  //Função para definir o operador da operação matemática
  const handleSetOperator = (operador) => {
    if (currentNumber !== "") {
      setPreviousNumber(currentNumber);
      setCurrentNumber("");
      setOperator(operador);
    }
  };

  // Função que execultar os calculos com base nos operadores
  const handleCalculate = () => {
    if (previousNumber !== "" && currentNumber !== "" && operator) {
      // Converte as strings para números reais
      const num1 = parseFloat(previousNumber);
      const num2 = parseFloat(currentNumber);

      let result = 0;

      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "x":
          result = num1 * num2;
          break;
        case "÷":
          result = num2 !== 0 ? num1 / num2 : "Erro";
          break;
        case "%":
          result = num1 * (num2 / 100);
          break;
        default:
          return;
      }
      // Atualiza a expressão para exibir o cálculo realizado
      setExpression(`${previousNumber} ${operator} ${currentNumber} =`);
      // Exibe o resultado na tela convertendo-o para string
      setCurrentNumber(result.toString());
      // Limpa o previousNumber e o operador para futuras operações
      setPreviousNumber("");
      setOperator(null);
    }
  };

  return (
    <Container>
      <Context>
        {/* Área de exibição da operação */}
        <Input
          value={expression}
          readOnly
          placeholder="Operação"
          /* Pode ter estilos menores ou menos destacados */
        />
        {/* Área de exibição do resultado */}
        <Input
          value={currentNumber}
          readOnly
          placeholder="Resultado"
          /* Geralmente o resultado é exibido em destaque */
        />

        {/* Botões da calculadora */}
        <Row>
          <Button label="clear" onClick={handleOnClear} />
          <Button label="x" onClick={() => handleSetOperator("*")} />
          <Button label="÷" onClick={() => handleSetOperator("/")} />
          <Button label="backspace" onClick={handleBackspace} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={() => handleAddNumber("-")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={() => handleSetOperator("+")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleCalculate} />
        </Row>
        <Row>
          <Button label="%" onClick={() => handleSetOperator("%")} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="." onClick={() => handleAddNumber(".")} />
          <Button label="," onClick={() => handleAddNumber(",")} />
        </Row>
      </Context>
    </Container>
  );
};
export default App;
