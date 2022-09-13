import LocationCity from "../components/LocationCity";
import useFetch from "../hooks/useFetch";
import Notfound from "./404";
import Form from "react-bootstrap/Form"

function ReportNew() {
  /*   const { data, loading, error } = useFetch(
      "https://inap-moviles-default-rtdb.firebaseio.com/locations.json"
    );
  
    if (!error) {
      return <div>{LocationCity(data)}</div>;
    }
    return <div>{Notfound}</div>; */

  <Form>
    <fieldset>
      <Form.Group classname="mb-3">
        <Form.Label htmlFor="disabledTextInput">Dosabled input</Form.Label>
        <Form.Control id="disabledTextInput" placeholder="Disabled input" />
      </Form.Group>
      <Form.Group classname="mb-3">
        <Form.Label htmlFor="disabledSelect">Dosabled select menu</Form.Label>
        <Form.Select id="disabledSelect">
          <option>Disable select</option>
        </Form.Select>
      </Form.Group>
      <Form.Group classname="mb-3">
        <Form.Check type="Checkbox"
          id="disabledFieldsetCheck" label="cant check this" />
      </Form.Group>
    </fieldset>
  </Form>
  
  
}

export default ReportNew;
