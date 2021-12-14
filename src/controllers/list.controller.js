import List from "../db/models/list.model";
/**
 *Contains List Controller
 *
 *
 *
 * @class ListController
 */
class ListController {
    /**
     * Add an List
     * @param {Request} req - Response object.
     * @param {Response} res - The payload.
     * @memberof ListController
     * @returns {JSON} - A JSON success response.
     *
     */
    static async addList(req, res) {
        try {
            const item = await List.create(req.body)

            return res.status(200).json({
                status: "success",
                data: {
                    item
                }
            });
        } catch (error) {
            return res.status(500).json({
                status: "500 Internal server error",
                error: "Error adding List",
            });
        }
    }

    /**
    * Update List comment
    * @param {Request} req - Response object.
    * @param {Response} res - The payload.
    * @memberof ListController
    * @returns {JSON} - A JSON success response.
    *
    */
    static async updateList(req, res) {
        try {
            let list = await List.findOneAndUpdate({
                _id: req.params.listId
            }, req.body, {
                new: true,
            });

            return res.status(200).json({
                status: "success",
                data: {
                    list
                }
            });
        } catch (error) {
            return res.status(500).json({
                status: "500 Internal server error",
                error: "Error updating List",
            });
        }
    }

    /**
     * get Lists
     * @param {Request} req - Response object.
     * @param {Response} res - The payload.
     * @memberof ListController
     * @returns {JSON} - A JSON success response.
     *
     */
    static async getLists(req, res) {
        try {
            const Lists = await List.find().sort({
                createdAt: -1
            })
            return res.status(200).json({
                status: "success",
                data: {
                    Lists
                }
            });
        } catch (error) {
            return res.status(500).json({
                status: "500 Internal server error",
                error: "Error getting Lists",
            });
        }
    }


    /**
   * Delete a comment
   * @param {Request} req - Response object.
   * @param {Response} res - The payload.
   * @memberof ListController
   * @returns {JSON} - A JSON success response.
   *
   */
    static async deleteComment(req, res) {
        try {
            await List.findOneAndDelete({
                _id: req.params.listId
            });
            return res.status(200).json({
                status: "success",
                data: {
                    message: 'Data delected successfully'
                }
            });
        } catch (error) {
            return res.status(500).json({
                status: "500 Internal server error",
                error: "Error deleting List comment",
            });
        }
    }

}
export default ListController;