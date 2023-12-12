
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'react-bootstrap'

export default function CardRouter({ data, redirect }) {
  return (
    <>
      <Card
        style={{
          width: '18rem',
          margin: '50px auto',
          boxShadow: '5px 5px 5px 5px gray',
        }}
      >
        <img
          alt="Sample"
          src={data.image}//props {data is name of props} 
          role='button'
          height="300px"
          border="2px solid"
          onClick={() => redirect(data.id)}
        />
        <CardBody>
          <CardTitle tag="h5" style={{ whiteSpace:"nowrap", overflow:"hidden",textOverflow:"ellipsis"}}>
            {data.title}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText  style={{ whiteSpace:"nowrap", overflow:"hidden",textOverflow:"ellipsis"}}>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
          {/* to get id from props */}
          <Button  onClick={() => redirect(data.id)}> 
            Show product
          </Button>
          <Button className='bg-danger border border-danger ms-5'>Add</Button>
        </CardBody>
      </Card>
    </>
  )
}
