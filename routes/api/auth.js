const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jsonwt = require('jsonwebtoken')
const passport = require('passport')
const key = require('../../setup/myurl')



// @type     GET
// @route    /api/auth
// @desc     just for test
// @access   PUBLIC

router.get('/', (req, res) => res.json({ test: 'Auth is being tested' }))


//Import schema for person to register
const Person = require('../../models/Person')
const Asset = require('../../models/Asset')
const Task = require('../../models/Task')
const Task = require('../../models/Worker')

// @type     POST
// @route    /api/auth/add-asset
// @desc     route for taking details of asset and saving it
// @access   PUBLIC

router.post('/add-asset', (req, res) => {
    Asset.findOne({ assetName: req.body.name })
        .then(asset => {
            if (asset) {
                return res
                    .status(400)
                    .json({ error: 'Asset already registered' })
            } else {
                const newAsset = new Asset({
                    assetName: req.body.name,
                    assetId: req.body.id,
                    assetDescription: req.body.description
                })
                
                        newAsset
                            .save()
                            .then(asset => res.json(asset))
                            .catch(err => console.log(err))
                        // Store in your  DB.
                    });
                });

            }
        })
        .catch(err => console.log(err))
})



// @type     POST
// @route    /api/auth/add-task
// @desc     route for taking details of task and saving it
// @access   PUBLIC

router.post('/add-task', (req, res) => {
    Task.findOne({ taskName: req.body.name })
        .then(task => {
            if (task) {
                return res
                    .status(400)
                    .json({ error: 'task already registered' })
            } else {
                const newTask = new Task({
                    taskName: req.body.name,
                    taskId: req.body.id,
                    taskDescription: req.body.description,
                    taskFrequency: req.body.frequency
                })
                
                        newTask
                            .save()
                            .then(task => res.json(task))
                            .catch(err => console.log(err))
                        // Store in your  DB.
                    });
                });

            }
        })
        .catch(err => console.log(err))
})


// @type     POST
// @route    /api/auth/add-worker
// @desc     route for taking details of worker and saving it
// @access   PUBLIC

router.post('/add-worker', (req, res) => {
    Worker.findOne({ workerId: req.body.id })
        .then(worker => {
            if (worker) {
                return res
                    .status(400)
                    .json({ error: 'worker already registered' })
            } else {
                const newWorker = new Worker({
                    workerName: req.body.name,
                    workerId: req.body.id,
                    workerDescription: req.body.description,
                    skills:req.body.skills
                    
                })
                
                        newWorker
                            .save()
                            .then(worker => res.json(worker))
                            .catch(err => console.log(err))
                       
                    });
                });

            }
        })
        .catch(err => console.log(err))
})



// @type     GET
// @route    /api/auth/assets/all
// @desc     route for getting all assets
// @access   PUBLIC

router.get('/assets/all',(req,res)=>{
    Asset.find()
        .then(asset=>{
            if(!asset){
                res.status(404).json({assetnotfound:'No asset found'})
            }
            res.json(asset)
        })
        .catch(err=>console.log('Error in fetching assets'+err))
})














module.exports = router;
