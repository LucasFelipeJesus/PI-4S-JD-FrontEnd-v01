import { useEffect, useRef, useState } from "react"
import { Equipment } from "../../../interfaces/equipments"
import { Button, Flex, HStack, Input, Select } from "@chakra-ui/react"

interface FormEquipmentProps {
    equipments: Equipment[]
    setEquipments: (equipments: Equipment[]) => void
}

function FormEquipment({ equipments, setEquipments }: FormEquipmentProps) {

    const [description, setDescription] = useState('')
    const [model, setModel] = useState('')
    const [category, setCategory] = useState('')
    const [checklist, setChecklist] = useState('')

    function addEquipment() {
        if(equipments.length > 0) {
            const lastId = equipments[equipments.length - 1].id
            const newEquipment = {id: lastId + 1, description: description, model: model, category: category, checklist: checklist}
            setEquipments([...equipments, newEquipment])
        }
    }

    const inputEquipment = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(inputEquipment.current) inputEquipment.current.focus()
    }, [])

    return (
        <Flex w={'150vh'} alignItems='center' justifyContent='space-around' p={2}>
            <HStack spacing={4}>
                <Input
                    ref={inputEquipment}
                    variant='outline'
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Modelo"
                    value={model}
                    onChange={(event) => setModel(event.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
                {/* <Input
                
                    type="number"
                    placeholder="Vistoria"
                    value={checklist}
                    onChange={(event) => setChecklist(event.target.value)}
                /> */}
                <Select>
                    <option value="1">Vistoria 1</option>
                    <option value="2">Vistoria 2</option>
                    <option value="3">Vistoria 3</option>
                    <option value="4">Vistoria 4</option>

                </Select>
            </HStack>
            <Button size={"sm"} width='90px' onClick={addEquipment} colorScheme="green">Adicionar</Button>
        </Flex>

    )
}

export default FormEquipment