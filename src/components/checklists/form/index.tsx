import { useEffect, useRef, useState } from "react"
import { Checklist } from "../../../interfaces/checklists"
import { Button, Flex, HStack, Input, Select } from "@chakra-ui/react"
import Equipments from "../../../pages/equipments"

interface FormChecklistProps {
    checklists: Checklist[]
    setChecklists: (checklists: Checklist[]) => void
}

function FormChecklist({ checklists, setChecklists }: FormChecklistProps) {

    const [description, setDescription] = useState('')

    function addChecklist() {
        if(checklists.length > 0) {
            const lastId = checklists[checklists.length - 1].id
            const newChecklist = {id: lastId + 1,description: description}
            setChecklists([...checklists, newChecklist])
            
        }
    }

    const inputChecklist = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(inputChecklist.current) inputChecklist.current.focus()
    }, [])

    return (
        <Flex w={'150vh'} alignItems='center' justifyContent='space-around' p={2}>
            <HStack spacing={4}>
                <Input
                    width={'500px'}
                    ref={inputChecklist}
                    variant='outline'
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                    {/* <Input
                        type="number"
                        placeholder="Id do Equipamento"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                /> */}
                <Select placeholder="Equipamento" width={'300px'}>
                    <option value="1">Equipamento 1</option>
                    <option value="2">Equipamento 2</option>
                    <option value="3">Equipamento 3</option>
                    <option value="4">Equipamento 4</option>
                </Select>
            </HStack>
            <Button size={"sm"} width='90px' onClick={addChecklist} colorScheme="green">Adicionar</Button>
        </Flex>

    )
}

export default FormChecklist