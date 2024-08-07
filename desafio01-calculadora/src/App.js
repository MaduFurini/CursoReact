import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [expression, setExpression] = useState('0');
  const [isResult, setIsResult] = useState(false);

  const handleClear = () => {
    setExpression('0');
    setIsResult(false);
  }

  const handleAddToExpression = (value) => {
    setExpression((prev) => (isResult || prev === '0' ? value : prev + value));
    setIsResult(false);
  }

  const handleEvaluate = () => {
    try {
      const result = eval(expression);
      setExpression(String(result));
      setIsResult(true);
    }catch{
      setExpression('Error');
      setIsResult(false);
    }
  }

  return (
    <Container>
      <Content>
        <Input value={expression}></Input>
        <Row>
          <Button label="C" onClick={handleClear} />
          <Button label="%" onClick={() => handleAddToExpression('/100')} />
          <Button label="/" onClick={() => handleAddToExpression('/')} />
          <Button label="*" onClick={() => handleAddToExpression('*')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddToExpression('7')} />
          <Button label="8" onClick={() => handleAddToExpression('8')} />
          <Button label="9" onClick={() => handleAddToExpression('9')} />
          <Button label="-" onClick={() => handleAddToExpression('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddToExpression('4')} />
          <Button label="5" onClick={() => handleAddToExpression('5')} />
          <Button label="6" onClick={() => handleAddToExpression('6')} />
          <Button label="+" onClick={() => handleAddToExpression('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddToExpression('1')} />
          <Button label="2" onClick={() => handleAddToExpression('2')} />
          <Button label="3" onClick={() => handleAddToExpression('3')} />
          <Button label="." onClick={() => handleAddToExpression('.')} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddToExpression('0')} />
          <Button label="=" onClick={handleEvaluate} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
