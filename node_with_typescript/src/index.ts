
import express, { Request, Response } from 'express'

import { Sequelize, DataTypes, Model, Optional, Op } from 'sequelize'
import * as bcrypt  from 'bcrypt'
// import { appLogger } from './logger'
import fileUpload from './file-upload'
import { multerConfig } from './multerCongif'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('file-storage'))

//DB connection

const dbConnection = new Sequelize('workspace_demo', 'root', '', {
    dialect: 'mysql',
    logging: false,
    operatorsAliases: {
            $eq: Op.eq,
            $ne: Op.ne,
            $like: Op.like,
            $gt: Op.gt,
            $gte: Op.gte,
            $lt: Op.lt,
            $lte: Op.lte
    }
});
interface Testmodel {
    fieldId: bigint;
    fieldOne: string;
    fieldTwo: number;
    email: string;
    createdAt: Date;
    updatedAt: Date
}
// Model Schema Define
const testModel = dbConnection.define('TestModel', {
    fieldId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    fieldOne: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    fieldTwo: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        // defaultValue: Date.now
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Date.now
    },
    status: {
        type: DataTypes.ENUM,
        values: ['Active', 'Inactive'], 
        defaultValue: 'Active'
    }
});

(async function () { try { await testModel.sync({ force: false }) } catch (e) { console.log(e) } })()

const salthashAndCheck = async function (saltValue: number, password: string) {
    return  await bcrypt.hash(password, saltValue)

}

const multer = multerConfig()

// const logger = appLogger()

app.post('/test', async (req: Request, res: Response) => {
    try {
        req.body.password = await salthashAndCheck(10, req.body.password)

        const response = await testModel.create({ ...req.body });

        res.json({
            data: response
        })

    } catch (error) {
        res.status(404).json({
            data: error
        })
        // logger.log('error', error)
    }
})

app.get('/all-test', async (req, res) => {
    const response = await testModel.findAll({ });
    res.json({
        data: response
    })
})

app.get('/test/:id', async (req, res) => {
    try {
        throw new Error('Customized error')
        const response = await testModel.findAll({
            where:{
                fieldId: {
                    $eq: Number(req.params.id)
                }
            }
        })
        res.json({
            data: response
        })
    } catch (error: any) {
        console.log(error.message)
        res.status(404).json({
            data: error
        })
        // logger.log('error', error.message)
    }
})

app.put('/test/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const findData = await testModel.findAll({
            where:{
                fieldId: {
                    $eq: Number(req.params.id)
                }
            }
        })
        console.log(findData)
        if(findData.length === 0) return res.status(404).json({data: 'data not found' })
        req.body.password = await salthashAndCheck(10, req.body.password)
        const updateData = await testModel.update({...req.body}, { 
            where: {
                fieldId: {$eq: +req.params.id}
            }
        })
        res.header('dummy', '10')
        res.json({
            data: updateData
        })
    } catch (error) {
        res.status(404).json({
            data: error
        })
    }
})

app.get('')

app.delete('/test/:id', async (req, res) => {
    try {
        const deleteData = await testModel.destroy({
            where: {
                fieldId: {
                    $eq: Number(req.params.id)
                }
            }
        })
        res.json({
            data: deleteData
        })
    } catch (error) {
        res.status(404).json({
            data: error
        })
    }

})

/**************** JSON */
app.post('/sign-in',  async (req: Request, res: Response) => {
    let findData = await testModel.findAll({
        where: {
            email: {$eq: req.body.email}
        }
    }) as any
    findData = JSON.parse(JSON.stringify(findData))
    if(findData.length === 0) return res.json({message: 'Not found '})
    console.log(findData)
    console.log(req.body.password)
    const hashedPass = findData[0].password
    // const test = await salthashAndCheck(10, req.body.password)
    // console.log(test)
    const decrypt = await bcrypt.compare(req.body.password, hashedPass)
    console.log(decrypt)
    res.header("dummy", "10")
    res.json({
        data: ''
    })

})

app.post('/upload-file', multer.single('file'), fileUpload.uploadFile)


app.listen(1113, () => {
    console.log('Running...')
})